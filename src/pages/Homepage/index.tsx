import { Background } from "../../components/Background/styles";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modals";
import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Search } from "../../components/Search";
import { Main } from "../../components/Main";

export const Dashboard = () => {
  const { isModalOpen } = useContext(ApiContext);

  return (
    <Background>
      <Header />
      <Main />
      {isModalOpen && <Modal />}
      <Search />
    </Background>
  );
};
