import { useContext } from "react";
import { ApiContext, iCharacter } from "../../contexts";
import { Button } from "../Button/styles";
import { StyledCard } from "../Card/styles";
import { StyledMain, StyledUl } from "./styles";

export const Main = () => {
  const { characters, nextPage, previousPage } = useContext(ApiContext);

  return (
    <StyledMain>
      <Button onClick={() => previousPage()} />
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
      <Button onClick={() => nextPage()} />
    </StyledMain>
  );
};
