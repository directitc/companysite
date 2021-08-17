import styled from 'styled-components';
import theme from '../../styles/Global.styles';

export const Slider1 = styled.div`
    // background-image: url('https://static.overlay-tech.com/assets/1fdfbe92-b98f-41b5-bb87-029bd1b19e5d.png');
    // background-size: 100% 100%;
    // background-position: center;
    // padding: 292px 439px 295px 1022px;
    // display: flex;
    // flex-direction: column;
    // align-items: flex-start;
    position: relative;
    width: auto;
    height: 800px;
    // left: 0px;
    // top: 0px;
`;

export const RadialBackground = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: radial-gradient(
        47.46% 41.25% at 32.88% 64.94%,
        rgba(37, 43, 66, 0.288) 0%,
        rgba(37, 43, 66, 0.96) 100%
    );
`;

export const SliderImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const SliderTitle = styled.h1`
    color: ${theme.colors.white};
    // height: 39.44%;
    // width: 95.76%;
    // display: flex;
    // margin-left: 11px;
    // position: absolute;
    // left: 52.17%;
    // right: 22.73%;
    // top: 36.5%;
    // bottom: 53%;
    position: absolute;
    width: 499px;
    top: 292px;
    left: 1033px;
    letter-spacing: 0;
    font-family: 'Roboto';
    font-size: 72px;
    font-weight: 700;
    line-height: 84px;
`;

export const SliderSubtitle = styled.p`
    color: ${theme.colors.transparentWhite};
    // height: 26.29%;
    // align-self: stretch;
    // margin-bottom: 13px;
    // position: absolute;
    // left: 51.62%;
    // right: 22.17%;
    // top: 47%;
    // bottom: 46%;
    position: absolute;
    top: 376px;
    left: 1022px;
    letter-spacing: 0;
    font-family: 'Roboto';
    font-size: 48px;
    font-weight: 400;
    line-height: 56px;
`;

export const ButtonDiv = styled.div`
    // position: absolute;
    // left: 56.69%;
    // right: 28.17%;
    // top: 55.62%;
    // bottom: 36.88%;
    // width: 300px;
    position: absolute;
    height: 60px;
    top: 500px;
    left: 1100px;
    display: flex;
    align-items: flex-start;
`;

export const SliderButton = styled.div`
    background-color: ${theme.colors.darkKhaki};
    // margin-left: 100.43px;
    // padding: 13px 38.98px 12px;
    // display: flex;
    // align-items: center;
    // position: absolute;
    // left: 56.69%;
    // right: 28.17%;
    // top: 55.62%;
    // bottom: 36.88%;
    height: 60px;
    display: flex;
    padding: 12px 37px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 300px;
`;

export const SliderButtonText = styled.p`
    color: ${theme.colors.white};
    // width: 100%;
    // align-self: stretch;
    // display: flex;
    // position: absolute;
    // left: 58.66%;
    // right: 30.14%;
    // top: 57.25%;
    // bottom: 38.38%;
    position: absolute;
    width: 224px;
    min-height: 35px;
    letter-spacing: 0;
    font-family: ${theme.fonts.roboto30Regular.family};
    font-size: ${theme.fonts.roboto30Regular.size};
    font-weight: ${theme.fonts.roboto30Regular.weight};
    line-height: ${theme.fonts.roboto30Regular.lineHeight};
    text-align: center;
`;
