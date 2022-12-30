import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Modal } from "../Modals";
import {
  StyledCardResidents,
  StyledResidents,
  StyledUlResidents,
} from "./styles";

export const Residents = () => {
  const { residents, openModal, isModalOpen } = useContext(ApiContext);

  return (
    <StyledResidents>
      <h2>Residents</h2>
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
