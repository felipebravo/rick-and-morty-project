import { Player } from "@lottiefiles/react-lottie-player";
import { Background } from "../../components/Background/styles";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Background>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets9.lottiefiles.com/packages/lf20_4jsnlwpe.json"
        style={{ height: "400px", width: "90%" }}
      ></Player>
      <h1>404</h1>
      <Link to={"/"}>
        <h2>Go back</h2>
      </Link>
    </Background>
  );
};
