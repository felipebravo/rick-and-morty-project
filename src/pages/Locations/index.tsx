import { Background } from "../../components/Background/styles";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { MainLocation } from "../../components/MainLocations";

export const MainLocations = () => {
  return (
    <Background>
      <Header />
      <MainLocation />
      {/* <Search /> */}
    </Background>
  );
};
