import { SearchAndGif } from "./styles";
import Gif from "../../assets/giphy.gif";
import { MdSavedSearch } from "react-icons/md";

export const Search = () => {
  return (
    <SearchAndGif>
      <div className="search__style">
        <MdSavedSearch />
        <input
          className="input"
          type="text"
          placeholder="
Search for a character..."
        />
      </div>
      <div className="gif__style">
        <img src={Gif} alt="Rick and Morty" />
      </div>
    </SearchAndGif>
  );
};
