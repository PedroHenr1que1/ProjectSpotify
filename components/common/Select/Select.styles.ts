import styled from "styled-components";
import { COLORS} from "../../../themes/colors";

export const Title = styled.text`
  color: ${COLORS.fontPrimary};
  font-weight: 600;
  font-size: 18px;
  align-self: flex-start;
`;

export const StyledSelect = styled.select`
  color: ${COLORS.fontPrimary};
  background-color: ${COLORS.primary};
  padding: 14px;
  width: 345px;
  border: 2px solid ${COLORS.primary};
  border-radius: 10px;
  font-weight: 600;
  .hover {
    color: red;
  }
  :focus{
    outline: none;
  }
  @media (max-width: 750px) {
        width: 300px;
        height: 36px;
        padding: 0.2rem;
    }
    @media (max-width: 360px) {
        width: 250px;
        height: 34px;
    }
`;

export const Option = styled.option`
  font-size: 12px;
  padding: 0;
  margin: 0;
  width: 10%;
  `