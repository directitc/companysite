import styled from 'styled-components';
import theme from '../../styles/Global.styles';

export const EllipseGroup = styled.div`
    //   display: flex;
    //   align-items: flex-start;
    position: absolute;
    width: 87.96px;
    height: 22px;
    left: 945.52px;
    top: 737px;
`;
export const Ellipse1 = styled.div`
    background-color: ${theme.colors.dimGray};
    // width: 25%;
    // margin-right: 10.99px;
    border-radius: 50%;
    // align-self: stretch;
    position: absolute;
    left: 0%;
    right: 75%;
    top: 0%;
    bottom: 0%;
`;
export const Ellipse2 = styled.div`
    background-color: ${theme.colors.silver};
    // width: 25%;
    border-radius: 50%;
    // align-self: stretch;
    // &:not(:last-of-type) {
    //     margin-right: 11px;
    // }
    position: absolute;
    left: 37.5%;
    right: 37.5%;
    top: 0%;
    bottom: 0%;
`;
export const Ellipse3 = styled.div`
    background-color: ${theme.colors.silver};
    // width: 25%;
    border-radius: 50%;
    // align-self: stretch;
    // &:not(:last-of-type) {
    //     margin-right: 11px;
    // }
    position: absolute;
    left: 75%;
    right: 0%;
    top: 0%;
    bottom: 0%;
`;
