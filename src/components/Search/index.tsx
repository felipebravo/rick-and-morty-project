import { SearchAndGif } from "./styles";
import { MdSavedSearch } from "react-icons/md";
import Gif from "../../assets/giphy.gif";
import { Button } from "../Button/styles";

export const Search = () => {
  return (
    <SearchAndGif>
      <div className="search__style">
        <Button>
          <MdSavedSearch />
        </Button>
        <input className="input" type="text" placeholder="Pesquisar..." />
      </div>
      <img className="gif" src={Gif} alt="Rick and Morty" />
    </SearchAndGif>
  );
};
