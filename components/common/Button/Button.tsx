import React, { forwardRef, ButtonHTMLAttributes } from "react";

import { Button as StyledButton } from "./Button.styles";

import { COLORS } from "../../../themes/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: string;
  background?: string;
  borderColor?: string;
  fontSize?: string;
  height?: string;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ title, background, color, borderColor, fontSize, height, width, disabled, loading, ...rest}, ref) => {

  return (
    <StyledButton
      disabled={disabled}
      ref={ref}
      color={COLORS.white}
      background={COLORS.primary}
      borderColor={COLORS.primary}
      fontSize={ fontSize === undefined ? "16px" : fontSize }
      height={ height === undefined ? "48px" : height }
      width={ width === undefined ? "344px" : width }
      {...rest}
    >{ loading === true ? "Carregando..." : title}</StyledButton>
  )
}

export default forwardRef(Button);
