import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iProviderProps {
  children: React.ReactNode;
}

interface iApiProvider {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  handleModal(): void;
  isModalOpen: boolean;
  characters: iCharacter[];
  nextPage: () => void;
  previousPage: () => void;
  setLocations: React.Dispatch<React.SetStateAction<iLocation[]>>;
  locations: iLocation[];
  setLocationsPage: React.Dispatch<React.SetStateAction<number>>;
  locationsPage: number;
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
  location: {};
  name: string;
  origin: iOrigin;
  species: string;
  status: string;
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [locations, setLocations] = useState<iLocation[]>([]);
  // const [residents, setResidents] = useState<string[]>([]);
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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ApiContext.Provider
        value={{
          setIsLoading,
          isLoading,
          handleModal,
          isModalOpen,
          characters,
          nextPage,
          previousPage,
          setLocations,
          locations,
          setLocationsPage,
          locationsPage,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
};
