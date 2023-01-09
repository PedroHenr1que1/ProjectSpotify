import React, { InputHTMLAttributes, forwardRef } from "react";

import { AlinhamentoInput, Input, Title } from "./TextInput.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  disable?: boolean;
}

const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ title, disable, ...rest}, ref) => {
  return (
    <AlinhamentoInput>
      <Title>{title}</Title>
      <Input
        disabled={disable}
        ref={ref}
        type="text"
        {...rest}
      />
    </AlinhamentoInput>
  )
}

export default forwardRef(TextInput);
