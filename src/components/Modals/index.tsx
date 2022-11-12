import { ModalBackground, ModalStyled } from "./styles";

export const Modal = ({ children }: any) => {
  const status = "alive";

  return (
    <ModalBackground>
      <ModalStyled variant={status} />
    </ModalBackground>
  );
};
