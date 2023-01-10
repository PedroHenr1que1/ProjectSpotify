import styled from "styled-components";

import { COLORS } from "../../themes/colors";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom , ${COLORS.backgroundColorPrimary} 60%,${COLORS.backgroundColorSecondary});
`;