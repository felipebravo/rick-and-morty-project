import {
  StyledMainLocation,
  StyledUlLocations,
  StyledCardLocations,
} from "./styles";
import { useContext } from "react";
import { ApiContext } from "../../contexts";
import { Modal } from "../../components/Modals";

export const MainLocation = () => {
  const { isModalOpen, locations } = useContext(ApiContext);
  console.log(locations);
  return (
    <StyledMainLocation>
      <StyledUlLocations>
        {locations?.map((location) => (
          <StyledCardLocations>
            <h3 className={location.type}>{location.name}</h3>
          </StyledCardLocations>
        ))}
      </StyledUlLocations>
      {isModalOpen && <Modal />}
    </StyledMainLocation>
  );
};
