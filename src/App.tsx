import React from "react";
import { GlobalStyle } from "./styles";
import { api } from "./services/api";
import { Loading } from "./components/Loading";
import { Dashboard } from "./pages/Homepage";
import { ApiContext } from "./contexts";
import { useContext } from "react";

function App() {
  // const { getCharacters } = useContext(ApiContext);
  const { isModalOpen } = useContext(ApiContext);

  const getCharacters = async () => {
    try {
      const { data } = await api.get("character");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <GlobalStyle />
      {/* <PageNotFound /> */}
      {/* <Loading /> */}
      {/* <button onClick={getCharacters}>Aqui!</button> */}
      <Dashboard />
      {/* {isModalOpen && } */}
    </>
  );
}

export default App;
