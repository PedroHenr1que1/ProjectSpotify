import React, { forwardRef, SelectHTMLAttributes } from "react";

import { Title, StyledSelect, Option } from "./Select.styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  placeholder: string;
  disable?: boolean;
  options: Array<string>;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { title, disable, options, placeholder, ...rest },
  ref
) => {
  return (
    <>
      <Title>{title}</Title>
      <StyledSelect ref={ref} disabled={disable} {...rest}>
        <Option selected disabled hidden>
          {placeholder}
        </Option>
        {options.map((item: string, index: number) => (
          <Option key={index}>{item}</Option>
        ))}
      </StyledSelect>
    </>
  );
};

export default forwardRef(Select);
