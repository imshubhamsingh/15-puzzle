import styled from 'styled-components';
import { color, transition } from '@Utils';

export const Button = styled.button`
  font-size: 22px;
  float: left;
  width: 150px;
  height: 100%;
  display: block;
  background-color: ${color.gridTileColor};
  border-radius: 8px;
  text-decoration: none;
  color: ${color.primaryFontColor(0.5)};
  ${transition({ property: 'color' })};
  line-height: 60px;
  text-align: center;
  &:active {
    background-color: ${props => (props.error ? dullRed : ceruleanBlue)};
    transform: scale(0.99);
  }
  &:hover {
    background-color: ${color.buttonHoverColor};
    color: ${color.primaryFontColor()};
  }
  @media only screen and (max-width: 520px) {
    font-size: 16px;
    width: 100px;
    height: 100%;
    border-radius: 5px;
    padding: 0 5px;
    line-height: 42px;
  }
`;
