import { FC } from "react";
import { FlexBox } from "../Flexbox";
import * as Atom from "./atoms";
import type { IButton } from "./types";


const Button: FC<IButton> = ({ children, disabled, onClick }) => {
  return (
    <Atom.Button disabled={disabled} onClick={onClick}>
      <FlexBox align="center" justify="flex-start" direction="row" gap="xxxs">
        {children}
      </FlexBox>
    </Atom.Button>
  );
};

export default Button;
