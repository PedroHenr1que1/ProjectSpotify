import React, { forwardRef, ButtonHTMLAttributes } from "react";

import { Button as StyledButton } from "./Button.styles";

import { COLORS } from "../../../themes/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  buttonType: "primary" | "secondary" | "invertedPrimary" | "invertedSecondary";
  color?: string;
  background?: string;
  borderColor?: string;
  fontSize?: string;
  height?: string;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = ({ title, background, color, borderColor, buttonType, fontSize, height, width, disabled, loading, ...rest}, ref) => {

  return (
    <StyledButton
      disabled={disabled}
      ref={ref}
      color={
        buttonType === "primary" ? COLORS.backgroundColor : 
          buttonType === "secondary" ? COLORS.backgroundColor : 
            buttonType === "invertedPrimary" ? COLORS.primary :
              buttonType === "invertedSecondary" ? COLORS.secundary : ""
      }
      background={
        buttonType === "primary" ? COLORS.primary : 
          buttonType === "secondary" ? COLORS.secundary : 
            buttonType === "invertedPrimary" ? COLORS.backgroundColor :
              buttonType === "invertedSecondary" ? COLORS.backgroundColor : ""
      }
      borderColor={
        buttonType === "primary" ? COLORS.primary : 
          buttonType === "secondary" ? COLORS.secundary : 
            buttonType === "invertedPrimary" ? COLORS.primary :
              buttonType === "invertedSecondary" ? COLORS.secundary : ""
      }
      fontSize={ fontSize === undefined ? "16px" : fontSize }
      height={ height === undefined ? "48px" : height }
      width={ width === undefined ? "344px" : width }
      {...rest}
    >{ loading === true ? "Carregando..." : title}</StyledButton>
  )
}

export default forwardRef(Button);
