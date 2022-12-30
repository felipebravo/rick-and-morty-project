import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Modal } from "../Modals";
import {
  StyledCardResidents,
  StyledResidents,
  StyledUlResidents,
} from "./styles";
import { SlClose } from "react-icons/sl";

export const Residents = () => {
  const { residents, openModal, isModalOpen, setResidents } =
    useContext(ApiContext);

  return (
    <StyledResidents>
      <div>
        <h2>Residents</h2>
        <button onClick={() => setResidents([])}>
          <SlClose />
        </button>
      </div>
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
