import {
  StyledMainLocation,
  StyledUlLocations,
  StyledCardLocations,
} from "./styles";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../contexts";
import { Modal } from "../../components/Modals";
import { api } from "../../services/api";
import { ScrollAutoReq } from "../ScrollAutoRec";

export const MainLocation = () => {
  const {
    isModalOpen,
    locations,
    setLocations,
    locationsPage,
    setLocationsPage,
  } = useContext(ApiContext);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await api.get(`location?page=${locationsPage}`);
        setLocations([...locations, ...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };
    getLocations();
  }, [locationsPage]);

  return (
    <StyledMainLocation>
      <StyledUlLocations>
        {locations?.map((location) => (
          <StyledCardLocations key={location.id}>
            <h3 className={location.type}>{location.name}</h3>
          </StyledCardLocations>
        ))}
        <ScrollAutoReq
          callback={() =>
            setLocationsPage(
              (previousLocationsPage) => previousLocationsPage + 1
            )
          }
        />
      </StyledUlLocations>
      {isModalOpen && <Modal />}
    </StyledMainLocation>
  );
};
