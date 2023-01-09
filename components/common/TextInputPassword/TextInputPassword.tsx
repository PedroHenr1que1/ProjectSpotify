
import React, { InputHTMLAttributes, forwardRef } from "react";

import VisibilityOn from '../../../assets/Svg/visibilityOn.svg';
import VisibilityOff from '../../../assets/Svg/visibilityOff.svg';

import {
  AlinhamentoIcon,
  AlinhamentoInput,
  Input,
  Title,
} from './TextInputPassword.styles'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  securityPassword: boolean;
}

const TextInputPassword: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ title, securityPassword, ...rest}, ref) => {

  return (
    <AlinhamentoInput>
      <Title>{title}</Title>
      <AlinhamentoIcon>
        <Input
          ref={ref}
          type={'password'}
          {...rest}
        />
      </AlinhamentoIcon>
    </AlinhamentoInput>
  )
}

export default forwardRef(TextInputPassword);
