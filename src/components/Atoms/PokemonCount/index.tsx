import { FC } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import * as Atom from "./atoms";
import type { IPokemoncount } from "./types";

const PokemonCount: FC<IPokemoncount> = ({ count }) => {
  return (
    <Atom.PokemonCountContainer
      align="center"
      justify="flex-start"
      direction="row"
      gap="xxs"
      wrap="wrap"
    >
      <MdCatchingPokemon size="25" />
      {count} Pokemons
    </Atom.PokemonCountContainer>
  );
};

export default PokemonCount;
