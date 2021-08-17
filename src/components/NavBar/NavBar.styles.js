import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/Global.styles';

export const Nav = styled.nav`
    border: 2px solid blue;
    background: #ffffff;
    // position: relative;
    width: 500px;
    // top: 119px;
    // left: 250px;
    height: 68px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    z-index: 12;
    font-family: ${theme.fonts.roboto30Regular.family};
    font-size: ${theme.fonts.roboto30Regular.size};
    font-weight: ${theme.fonts.roboto30Regular.weight};
    line-height: ${theme.fonts.roboto30Regular.lineHeight};
    @media screen and (max-width: 1200px) {
        top: 0;
        left: 0;
        // display: block;
    }
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        // top: 0;
        // right: 0;
        // padding: 5px;
        width: 80px;
        // float: right;
    }
`;

export const NavMenu = styled.div`
    border: 2px solid green;
    display: flex;
    align-items: center;
    width: 720px;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
        display: none;
    }
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
        display: flex;
        justify-content: center;
        align-items: center;
        // position: absolute;
        // top: 0;
        // right: 0;
        // transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }
`;
