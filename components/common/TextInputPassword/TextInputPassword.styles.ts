import styled from "styled-components";
import { COLORS } from "../../../themes/colors";

export const Title = styled.text`
    padding: 10px 0px;
    font-weight: 600;
    font-size: 18px;
    color: ${COLORS.fontPrimary};
    @media (max-width: 360px) {
        font-size: 16px;
    }
`;

export const AlinhamentoInput = styled.div`
    display:flex;
    flex-direction: column;
`;

export const AlinhamentoIcon = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Input = styled.input`
    background-color: ${COLORS.backgroundColor} ;
    font-size: 14px;
    border: 1px solid ${COLORS.fontSecondary};
    border-radius: 10px;
    color: ${COLORS.fontPrimary};
    padding: 12px;
    width: 345px;
    font-weight: 700;
    ::placeholder{
        color: ${COLORS.fontSecondary};
        font-weight: 400;
    }
    :focus{
        outline: none;
    }
    @media (max-width: 750px) {
        width: 300px;
    }
    @media (max-width: 360px) {
        width: 250px;
        height: 38px;
    }
`;
