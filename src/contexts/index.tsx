import { createContext, useState } from "react";
import { api } from "../services/api";

interface iProviderProps {
  children: React.ReactNode;
}

interface iApiProvider {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  handleModal(): void;
  isModalOpen: string | null;
  getCharacters: () => Promise<void>;
}

interface iCharacter {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: {};
  name: string;
  origin: {};
  species: string;
  status: string;
  type: string;
  url: string;
}

export const ApiContext = createContext({} as iApiProvider);

export const ApiProvider = ({ children }: iProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<string | null>("teste");
  const [characters, setCharacters] = useState<iCharacter[]>();

  const getCharacters = async () => {
    try {
      const { data } = await api.get("character");
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModal = () => {
    setIsModalOpen(isModalOpen);
  };

  return (
    <>
      <ApiContext.Provider
        value={{
          setIsLoading,
          isLoading,
          handleModal,
          isModalOpen,
          getCharacters,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
};
