import styled from 'styled-components';
import { color, transition, bounceIn, fadeIn } from '@Utils';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  @media screen and (max-width: 520px) {
    width: 291px;
    margin: 0 auto;
  }
`;

export const GridContainer = styled.div`
  margin: 5px 0;
  grid-template-columns: auto auto auto auto;
  display: grid;
  position: relative;
  padding: 15px;
  cursor: default;
  touch-action: none;
  background: ${color.backgroundColor};
  border-radius: 12px;
  width: 500px;
  height: 500px;
  .grid-row {
    margin-bottom: 15px;
    display: flex;
  }
  @media screen and (max-width: 520px) {
    width: 292px;
    height: 292px;
    .grid-row {
      margin-bottom: 10px;
    }
  }
`;

export const GridOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 15px;
  z-index: 100;
  background-color: ${color.gridOverlayBackground};
  float: left;
  margin-top: 3px;
  margin-left: 2px;
  border-radius: 10px;
  width: 499px;
  height: 487px;
  animation: ${fadeIn} 250ms;
  @media screen and (max-width: 520px) {
    width: 280px;
    height: 275px;
    margin-left: 6px;
    margin-top: 5px;
  }
`;

export const PlayPauseContainer = styled.div`
  padding: 0 15px;
`;

export const CellContainer = styled.div`
  width: 106.25px;
  height: 106.25px;
  margin-right: 15px;
  border-radius: 10px;
  background-color: ${color.gridTileColor};
  @media screen and (max-width: 520px) {
    width: 57.5px;
    height: 57.5px;
    margin-right: 10px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

// 121px;
// 67px;
export const NumberCellContainer = styled.div`
  display: ${props =>
    props.number > 0 && props.number < 16 ? 'flex' : 'none'};
  border-radius: 10px;
  background: ${props =>
    props.index === props.number ? '#E88A45' : '#6ac6b8'};
  cursor: pointer;
  position: relative;
  user-select: none;
  justify-content: center;
  align-items: center;
  font-family: 'Pacifico', cursive;
  text-align: center;
  font-weight: bold;
  z-index: 10;
  font-size: 75px;
  width: 107px;
  ${transition({ property: 'transform' })};

  animation-duration: 0.75s;
  animation-name: ${bounceIn};

  height: 107px;
  transform: ${({ x = 0, y = 0 }) => `translate3d(${x}px, ${y}px, 0)`};
  .ball-1,
  .ball-2 {
    position: absolute;
    background-color: ${props =>
      props.index === props.number ? '  #CD583A' : '#499591'};
    opacity: 0.2;
    border-radius: 50%;
  }
  .ball-1 {
    height: 30px;
    width: 30px;
    top: 21px;
    left: 19px;
  }

  .ball-2 {
    height: 60px;
    width: 60px;
    bottom: 9px;
    right: 10px;
  }
  .shadow {
    color: ${props => (props.index === props.number ? '  #CD583A' : '#499591')};
    font-size: 90px;
    margin-left: ${props =>
      props.number.toString().length == 2
        ? props.number === 11
          ? -16
          : -6
        : props.number === 1
        ? -10
        : 0}px;
    margin-top: ${props => (props.number.toString().length == 2 ? -21 : -19)}px;
  }
  .number {
    color: white;
    z-index: 99;
    position: absolute;
    top: -22px;
    left: ${props => (props.number.toString().length == 2 ? 15 : 32)}px;
  }

  @media screen and (max-width: 520px) {
    width: 58px;
    height: 58px;
    line-height: 67.5px;
    font-size: 45px;
    padding-top: 9px;
    padding-left: ${props => (props.number === 1 ? 3 : 0)}px;
    border-radius: 5px;
    .ball-1 {
      height: 15px;
      width: 15px;
      top: 12px;
      left: 9px;
    }

    .ball-2 {
      height: 30px;
      width: 30px;
      bottom: 4px;
      right: 7px;
    }
    .shadow {
      font-size: 53px;
      margin-left: ${props =>
        props.number.toString().length == 2
          ? props.number === 11
            ? -6
            : -1
          : props.number === 1
          ? -7
          : 0}px;
      margin-top: ${props =>
        props.number.toString().length == 2 ? -20 : -19}px;
    }
    .number {
      top: -14px;
      left: ${props => (props.number.toString().length == 2 ? 7 : 16)}px;
    }
  }
`;

export const Keys = styled.span`
  width: 150px;
  float: left;
  height: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & span.bottom-keys {
    margin-top: -16px;
  }
  & rect {
    ${transition({ property: 'fill' })};
  }
  & path {
    ${transition({ property: 'transform' })};
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const GameScore = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 520px) {
    padding: 20px 15px 0 15px;
  }
`;

export const ScoreContainer = styled.div`
  background: ${color.gridTileColor};
  display: flex;
  margin-left: 10px;
  padding-left: 15px;
  border-radius: 8px;

  .move,
  .best,
  .time {
    position: relative;
    display: inline-block;
    text-align: right;
    width: 97px;
    padding: 13px 20px 0 10px;
    float: right;
  }
  .score-title {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    color: ${color.primaryFontColor()};
  }

  .move-container,
  .best-container,
  .time-container {
    font-size: 21px;
    line-height: 25px;
    font-weight: bold;
    color: ${color.primaryFontColor()};
  }

  .best {
    opacity: 0.5;
  }
  @media screen and (max-width: 520px) {
    padding-left: 10px;
    border-radius: 5px;

    .move-container,
    .best-container,
    .time-container {
      font-size: 16px;
      line-height: 14px;
      font-weight: bold;
    }

    .move,
    .best,
    .time {
      position: relative;
      display: inline-block;
      text-align: right;
      padding: 8px 15px 0 10px;
      float: right;
      width: 65px;
    }
    .time {
      width: 80px;
      padding-right: 6px;
    }
    .best {
      display: none;
    }
  }
`;

export const GameInstructionContainer = styled.div`
  display: flex;
  padding: 0 17px 0 6px;
  justify-content: space-between;
  @media screen and (max-width: 520px) {
    display: block;
  }
`;

export const Wave = styled.img`
  margin-top: -30px;
  @media screen and (max-width: 520px) {
    max-width: 270px;
    height: auto;
    margin-left: 9px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: space-between;
  .text-1 {
    font-family: 'Pacifico', cursive;
    text-align: center;
    font-weight: bold;
    font-size: 37px;
    color: ${color.backgroundColor};
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 22px;
  background: ${color.backgroundColor};
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 9px;
  & .text {
    color: ${color.primaryFontColor()};
    font-family: 'Clear Sans', Arial, sans-serif;
    text-align: center;
    bottom: 0px;
    margin: 11px auto 0px;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }

  & .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 29px;
  }

  @media (max-width: 520px) {
    height: 22px;
    margin-top: -10px;
    padding: 10px 4px;
    & .text {
      margin: 26px auto 0px;
    }
    & .logos {
      margin-top: 20px;
    }
  }
`;

export const Profile = styled.a`
  fill: ${color.gridTileColor};
  svg,
  path {
    ${transition({})};
    margin-right: 17px;
    height: 32px;
    width: 32px;
  }
  &:hover svg path,
  &:hover {
    fill: ${color.buttonHoverColor};
    color: ${color.buttonHoverColor};
  }

  @media (max-width: 520px) {
    svg,
    path {
      ${transition({})};
      margin-right: 7px;
      height: 22px;
      width: 22px;
    }
  }
`;
