import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "../../components/Button/styles";
import { Background } from "./styles";
import { GiUfo } from "react-icons/gi";

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
      <Button type="button">
        <GiUfo />
      </Button>
      <h1>404</h1>
    </Background>
  );
};
