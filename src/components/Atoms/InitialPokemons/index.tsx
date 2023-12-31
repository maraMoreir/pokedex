import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";


const InitialPokemons = () => {
  return (
    <FlexBox
      align="center"
      justify="center"
      direction="row"
      gap="xxs"
      wrap="wrap"
    >

         <Atom.PokemonGif
          flip
          alt="Pokemon pikachu gif"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
         />

        <Atom.PokemonGif
        flip
        alt="Pokemon gengar gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
      />

        <Atom.PokemonGif
        flip
        alt="Pokemon squirtle gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
      />

       <Atom.PokemonGif
        flip
        alt="Pokemon haunter gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif"
      />

<Atom.PokemonGif
        flip
        alt="Pokemon charmander gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
      />


      <Atom.PokemonGif
        flip
        alt="Pokemon gastly gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif"
      />

      <Atom.PokemonGif
        flip
        alt="Pokemon bulbasaur gif"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
      />





    </FlexBox>
  );
};

export default InitialPokemons;
