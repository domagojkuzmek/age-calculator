import type { ReactNode } from "react";
import { ButtonStyles } from "./ButtonStyles";

interface ButtonChildren {
  children: ReactNode;
}

function Button({ children }: ButtonChildren) {
  return <ButtonStyles type="submit">{children}</ButtonStyles>;
}

export default Button;
