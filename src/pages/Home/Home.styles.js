import styled from 'styled-components';
import theme from '../../styles/Global.styles';

export const StyledHomePage = styled.div`
    background-color: ${theme.colors.white};
    height: 2976px;
`;

export const StyledHeader = styled.div`
    border: 3px solid purple;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: auto;
    height: 350px;
    padding: 20px;
    @media screen and (max-width: 768px) {
        padding: 0px;
        height: auto;
        justify-content: space-between;
    }
`;
