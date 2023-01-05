import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Modal } from "../Modals";
import {
  StyledCardResidents,
  StyledResidents,
  StyledResidentsHeader,
  StyledUlResidents,
} from "./styles";
import { SlClose } from "react-icons/sl";

export const Residents = () => {
  const { residents, setResidents, openModal, isModalOpen } =
    useContext(ApiContext);

  return (
    <StyledResidents>
      <StyledResidentsHeader>
        <h2>Residents</h2>
        <button onClick={() => setResidents([])}>
          <SlClose />
        </button>
      </StyledResidentsHeader>
      <StyledUlResidents>
        {residents.map((resident) => (
          <StyledCardResidents>
            <button onClick={() => openModal(resident)}>
              <img src={resident.image} alt={resident.name} />
            </button>
          </StyledCardResidents>
        ))}
      </StyledUlResidents>
      {isModalOpen && <Modal />}
    </StyledResidents>
  );
};
