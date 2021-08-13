import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/Global.styles';

export const Nav = styled.nav`
    background: #ffffff;
    position: absolute;
    width: 720px;
    top: 119px;
    left: 893px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    z-index: 12;
    font-family: ${theme.fonts.roboto30Regular.family};
    font-size: ${theme.fonts.roboto30Regular.size};
    font-weight: ${theme.fonts.roboto30Regular.weight};
    line-height: ${theme.fonts.roboto30Regular.lineHeight};
`;

export const NavLink = styled(Link)`
    color: #000000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffffff;
        background-color: ${theme.colors.darkKhaki};
    }
    &:hover {
        color: #ffffff;
        background-color: ${theme.colors.darkKhaki};
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 720px;
    white-space: nowrap;
    */ @media screen and (max-width: 768px) {
        display: none;
    }
`;
