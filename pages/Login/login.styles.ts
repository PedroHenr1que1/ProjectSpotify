import styled from "styled-components";
import Image from 'next/image';

import { COLORS } from "../../themes/colors";

export const Background = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom , ${COLORS.backgroundColorPrimary} 60%,${COLORS.backgroundColorSecondary});
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;

export const ContainerInputs= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  width: 18vw;
  color: ${COLORS.fontSecondary};
  font-size: 12px;
  text-align: center
`;

export const Logo = styled(Image)`
  margin: 40px 0px 20px 0px;
`;

export const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF33;
  border-radius: 16px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const Warning = styled.p`
  color: ${COLORS.fontSecondary};
  font-size: 12px;
`;