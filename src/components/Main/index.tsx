import { Player } from "@lottiefiles/react-lottie-player";
import { useContext } from "react";
import { ApiContext, iCharacter } from "../../contexts";
import { Button } from "../Button/styles";
import { StyledCard } from "../Card/styles";
import { StyledMain, StyledUl } from "./styles";

export const Main = () => {
  const { characters, nextPage, previousPage } = useContext(ApiContext);

  return (
    <StyledMain>
      <div className="divPages">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets10.lottiefiles.com/packages/lf20_uciamg6x.json"
          style={{ height: "150px", width: "150px" }}
        />
        <Button onClick={() => previousPage()}>
          <span>Previous</span>
        </Button>
      </div>

      <StyledUl>
        {characters?.map((char: iCharacter) => (
          <StyledCard key={char.id}>
            <img src={char.image} alt={char.name} />
            <div className={char.status}>
              <span>{char.name}</span>
              <span>{char.species}</span>
              <span>{char.gender}</span>
              <span>{char.origin.name}</span>
            </div>
          </StyledCard>
        ))}
      </StyledUl>
      <div className="divPages">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src="https://assets2.lottiefiles.com/packages/lf20_a4fy6hhc.json"
          style={{ height: "150px", width: "150px" }}
        />
        <Button onClick={() => nextPage()}>
          <span>Next</span>
        </Button>
      </div>
    </StyledMain>
  );
};
