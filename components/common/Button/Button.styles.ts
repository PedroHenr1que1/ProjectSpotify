import styled, { css } from 'styled-components';

interface StyledButtonProps{
  color: string;
  background: string;
  borderColor: string;
  fontSize?: string;
  height?: string;
  width?: string;
}

export const Button = styled.button<StyledButtonProps>` 
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  border-style: solid;
  @media (max-width: 750px) {
        width: 300px;
        height: 42px;
    }
    @media (max-width: 360px) {
        width: 250px;
        height: 36px;
    };
  ${({ color }) =>
    color &&
    css`
      color: ${color};
  `};
  ${({ background }) =>
    background &&
    css`
      background: ${background};
  `};
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-Color: ${borderColor};
  `};
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
  `};
  ${({ height }) =>
    height &&
    css`
      height: ${height};
  `};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
  `};
  :active{
    opacity: 0.75;
  }
  
`;