import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { ModalBackground, ModalContent, ModalStyled } from "./styles";
import { Button } from "../Button/styles";

export const Modal = () => {
  const { handleModal } = useContext(ApiContext);

  return (
    <ModalBackground>
      <ModalStyled variant={"alive"}>
        <ModalContent>
          <Button onClick={() => handleModal()} />
        </ModalContent>
      </ModalStyled>
    </ModalBackground>
  );
};
