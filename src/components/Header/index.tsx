import { Link } from "react-router-dom";
import { HeaderStyled } from "./styles";
import InstagramImg from "../../assets/Instagram.svg";
import FacebookImg from "../../assets/Facebook.svg";
import PinterestImg from "../../assets/Pinterest.svg";
import TwitterImg from "../../assets/Twitter.svg";
import SpotifyImg from "../../assets/Spotify.svg";
import PhotosImg from "../../assets/Photos.svg";
import LocationImg from "../../assets/Google-Maps.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <a href="https://www.facebook.com/RickandMorty" target="_blank">
          <img
            className="navigation__icons"
            src={PhotosImg}
            alt="https://www.facebook.com/RickandMorty"
          />
        </a>
        <a href="https://www.instagram.com/rickandmorty/" target="_blank">
          <img
            className="navigation__icons"
            src={LocationImg}
            alt="https://www.instagram.com/rickandmorty/"
          />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/RickandMorty" target="_blank">
          <img
            className="navigation__icons"
            src={FacebookImg}
            alt="https://www.facebook.com/RickandMorty"
          />
        </a>
        <a href="https://www.instagram.com/rickandmorty/" target="_blank">
          <img
            className="navigation__icons"
            src={InstagramImg}
            alt="https://www.instagram.com/rickandmorty/"
          />
        </a>
        <a href="https://mobile.twitter.com/RickandMorty" target="_blank">
          <img
            className="navigation__icons"
            src={TwitterImg}
            alt="https://mobile.twitter.com/RickandMorty"
          />
        </a>
        <a
          href="https://br.pinterest.com/Black_Nordic/rick-and-morty/"
          target="_blank"
        >
          <img
            className="navigation__icons"
            src={PinterestImg}
            alt="https://br.pinterest.com/Black_Nordic/rick-and-morty/"
          />
        </a>
        <a
          href="https://open.spotify.com/playlist/3PInMVfvepLy1Xd9hfDVBD?si=347438848cee45db"
          target="_blank"
        >
          <img className="navigation__spotify" src={SpotifyImg} alt="Spotify" />
        </a>
      </div>
    </HeaderStyled>
  );
};
