import styled from "styled-components";
import { COLORS } from '../../../themes/colors';

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
    background-color: ${COLORS.gray};
    font-size: 14px;
    border: 2px solid ${COLORS.gray};
    border-radius: 10px;
    color: ${COLORS.fontPrimary};
    padding: 12px;
    width: 345px;
    font-weight: 600;
    .hover {
        color: red;
    }
    ::placeholder{
        color: ${COLORS.fontSecondary};
        font-weight: 400;
    }
    :focus{
        outline: none;
    }
    @media (max-width: 750px) {
        width: 300px;
        height: 36px;
    }
    @media (max-width: 360px) {
        width: 250px;
        height: 34px;
    }
`;
