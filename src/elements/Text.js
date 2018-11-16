import styled from 'styled-components';
import { color } from '@Utils';

export const GameInstruction = styled.span`
  display: block;
  float: right;
  margin-top: 18px;
  font-size: 22px;
  line-height: 30px;
  color: ${color.primaryFontColor(0.5)};
  & strong {
    color: ${color.primaryFontColor()};
    font-size: inherit;
  }
  @media screen and (max-width: 520px) {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    float: none;
    line-height: 24px;
  }
`;

export const HeaderText = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 60px;
  text-align: center;
  span {
    font-size: 85px;
  }
  color: ${color.primaryFontColor()};
  @media screen and (max-width: 520px) {
    font-size: 63px;
    span {
      font-size: 75px;
    }
  }
`;
