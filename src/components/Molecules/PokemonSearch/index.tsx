import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { Button, Input } from "../..";
import { atomPokemonSearch } from "../../../recoil/atoms";
import * as Atom from './atoms';


const PokemonSearch = () => {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const setPokemon = useSetRecoilState(atomPokemonSearch);

  return (
    <Atom.SearchContainer align="center" justify="flex-start" direction="row" gap="xxs">
      <Input
        placeholder="Procurar por nome ou ID"
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <Button onClick={() => setPokemon(searchPokemon)}>
        <MdSearch size="20" />
        Procurar
      </Button>
    </Atom.SearchContainer>
  );
};

export default PokemonSearch;
