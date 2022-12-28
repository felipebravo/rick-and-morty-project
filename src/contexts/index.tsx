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

export const ApiContext = createContext({} as iApiProvider);

export const ApiProvider = ({ children }: iProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [characters, setCharacters] = useState<iCharacter[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await api.get(`character/?page=${page}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getCharacters();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    page > 1 && setPage(page - 1);
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
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
};
