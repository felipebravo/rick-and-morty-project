import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iProviderProps {
  children: React.ReactNode;
}

interface iApiProvider {
  openModal: (resident: iCharacter) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  characters: iCharacter[];
  nextPage: () => void;
  previousPage: () => void;
  setLocations: React.Dispatch<React.SetStateAction<iLocation[]>>;
  locations: iLocation[];
  setLocationsPage: React.Dispatch<React.SetStateAction<number>>;
  locationsPage: number;
  setResidents: React.Dispatch<React.SetStateAction<iCharacter[]>>;
  residents: iCharacter[];
  residentsByLocation: (location: string[]) => void;
  residentDetails: iCharacter | null;
  setResidentDetails: React.Dispatch<React.SetStateAction<iCharacter | null>>;
}

interface iOrigin {
  name: string;
  url: string;
}

export interface iCharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: iOrigin;
  name: string;
  origin: iOrigin;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  url: string;
}

export interface iLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export const ApiContext = createContext({} as iApiProvider);

export const ApiProvider = ({ children }: iProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [locations, setLocations] = useState<iLocation[]>([]);
  const [residents, setResidents] = useState<iCharacter[]>([]);
  const [residentDetails, setResidentDetails] = useState<iCharacter | null>(
    null
  );
  const [charactersPage, setCharactersPage] = useState(1);
  const [locationsPage, setLocationsPage] = useState(0);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await api.get(`character/?page=${charactersPage}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getCharacters();
  }, [charactersPage]);

  const nextPage = () => {
    setCharactersPage(charactersPage + 1);
  };

  const previousPage = () => {
    charactersPage > 1 && setCharactersPage(charactersPage - 1);
  };

  const openModal = (resident: iCharacter) => {
    setIsModalOpen(!isModalOpen);

    setResidentDetails(resident);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const residentsByLocation = async (residents: string[]) => {
    setResidents([]);
    residents.map(async (resident: string) => {
      try {
        const characterId = resident.slice(42);
        const response = await api.get(`character/${characterId}`);
        setResidents((oldResidents) => [...oldResidents, response.data]);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <ApiContext.Provider
        value={{
          openModal,
          closeModal,
          isModalOpen,
          characters,
          nextPage,
          previousPage,
          setLocations,
          locations,
          setLocationsPage,
          locationsPage,
          setResidents,
          residents,
          residentsByLocation,
          residentDetails,
          setResidentDetails,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
};
