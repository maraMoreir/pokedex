import { TPokemonType } from "../../../Interface";

export interface ICardProps {
  id: number;
  image: string;
  name: string;
  preview?: string;
  type: TPokemonType;
}
