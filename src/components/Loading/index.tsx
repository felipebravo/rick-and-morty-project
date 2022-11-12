import { Player } from "@lottiefiles/react-lottie-player";

export const Loading = () => {
  return (
    <Player
      autoplay={true}
      loop={true}
      controls={false}
      src="https://assets8.lottiefiles.com/packages/lf20_qqtavvc0.json"
      style={{ height: "200px", width: "fit-content" }}
    ></Player>
  );
};
