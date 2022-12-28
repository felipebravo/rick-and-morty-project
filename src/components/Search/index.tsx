import { SearchAndGif } from "./styles";
import Gif from "../../assets/giphy.gif";
import { Button } from "../Button/styles";

export const Search = () => {
  return (
    <SearchAndGif>
      <div className="search__style">
        <Button />
        <input className="input" type="text" placeholder="Search..." />
      </div>
      <div className="gif__style">
        <img src={Gif} alt="Rick and Morty" />
      </div>
    </SearchAndGif>
  );
};
