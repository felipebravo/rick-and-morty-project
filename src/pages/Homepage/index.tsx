import { Background } from "../../components/Background/styles";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Main } from "../../components/Main";

export const Homepage = () => {
  return (
    <Background>
      <Header />
      <Main />
      <Search />
    </Background>
  );
};
