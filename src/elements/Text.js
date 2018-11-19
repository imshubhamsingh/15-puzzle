import styled from 'styled-components';
import { color } from '@Utils';

import Waves from '@Image/waves.gif';

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
  padding-left: 7px;
  margin-left: 2px;
  text-align: center;
  span {
    font-size: 85px;
  }

  background: url(${Waves}) repeat 0 0;
  width: 100%;
  text-align: center;
  color: ${color.primaryFontColor()};
  margin-top: 27px;
  @media screen and (max-width: 520px) {
    font-size: 44px;
    margin-left: -3px;
    margin-top: 5px;
    span {
      font-size: 58px;
    }
  }
`;
