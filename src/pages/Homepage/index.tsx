import { Background } from "../../components/Background/styles";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modals";
import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Button } from "../../components/Button/styles";
import { Search } from "../../components/Search";

export const Dashboard = () => {
  const { isModalOpen, handleModal } = useContext(ApiContext);

  return (
    <Background>
      <Header />
      {/* <Button onClick={handleModal}></Button>
      {isModalOpen && <Modal />} */}
      <Search />
    </Background>
  );
};
