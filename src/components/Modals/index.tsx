import { useContext, useEffect, useRef } from "react";
import { ApiContext } from "../../contexts";
import { ModalBackground, ModalContent, ModalStyled } from "./styles";
import { SlClose } from "react-icons/sl";

export const Modal = () => {
  const { residentDetails, closeModal } = useContext(ApiContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutclick = (evt: MouseEvent) => {
      const target = evt.target as HTMLDivElement;
      !contentRef.current?.contains(target) && closeModal();
    };

    document.addEventListener("mousedown", handleOutclick);

    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <ModalBackground>
      <ModalStyled variant={residentDetails?.status} ref={contentRef}>
        <button onClick={() => closeModal()}>
          <SlClose />
        </button>
        <ModalContent>
          <h3>{residentDetails?.name}</h3>
          <span>
            <img src={residentDetails?.image} alt={residentDetails?.name} />
          </span>
          <span>Origin: {residentDetails?.origin.name}</span>
          <span>Location: {residentDetails?.location.name}</span>
          <span>Gender: {residentDetails?.gender}</span>
          <span>Species: {residentDetails?.species}</span>
          <span>Status: {residentDetails?.status}</span>
        </ModalContent>
      </ModalStyled>
    </ModalBackground>
  );
};
