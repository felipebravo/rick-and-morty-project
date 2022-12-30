import {
  StyledMainLocation,
  StyledUlLocations,
  StyledCardLocations,
} from "./styles";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../contexts";
import { api } from "../../services/api";
import { ScrollAutoReq } from "../ScrollAutoRec";
import { Residents } from "../Residents";
import { Player } from "@lottiefiles/react-lottie-player";

export const MainLocation = () => {
  const {
    locations,
    setLocations,
    locationsPage,
    setLocationsPage,
    residents,
    residentsByLocation,
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
            <button
              className={location.type}
              onClick={() => residentsByLocation(location.residents)}
            >
              {location.name}
            </button>
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
      {residents.length > 0 ? (
        <Residents />
      ) : (
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets6.lottiefiles.com/packages/lf20_qqtavvc0.json"
          style={{ height: "400px", width: "90%" }}
        ></Player>
      )}
    </StyledMainLocation>
  );
};
