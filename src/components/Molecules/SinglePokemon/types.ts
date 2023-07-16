import { IPokemon } from "../../../Interface";

export interface ISinglePokemon {
  pokemon: IPokemon;
  loading: boolean;
  error: boolean;
}
