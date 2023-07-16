import { FC } from "react";
import pokeBall from "../../../assets/pokeball-rotate.png";
import * as Atom from "./atoms";
import type { ILoading } from "./types";


const Loading: FC<ILoading> = ({ isLoading, loadingText }) => {
  if (!isLoading) return null;

  return (
    <Atom.LoadingContainer
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
    >
      <Atom.PokemonIcon>
        <img src={pokeBall} alt="..." />
      </Atom.PokemonIcon>
      {loadingText}
    </Atom.LoadingContainer>
  );
};

export default Loading;
