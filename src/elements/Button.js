import styled from 'styled-components';
import { color, transition } from '@Utils';

export const Button = styled.button`
  font-size: 22px;
  width: ${props => (props.type === 'big' ? '100%' : '150px')};
  display: block;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  text-decoration: none;
  line-height: 60px;
  text-align: center;
  background-color: ${color.gridTileColor};
  color: ${props =>
    props.textColor ? props.textColor : color.primaryFontColor(0.5)};
  ${transition({ property: 'color' })};
  ${transition({ property: 'background-color' })};
  ${transition({ property: 'opacity' })};
  &:active {
    transform: scale(0.99);
  }
  &:hover {
    background-color: ${color.buttonHoverColor};
    color: ${color.primaryFontColor()};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: ${color.gridTileColor};
      color: ${color.primaryFontColor(0.5)};
    }
  }

  @media (hover: none), (hover: on-demand) {
    &:hover {
      background-color: ${color.gridTileColor};
      color: ${color.primaryFontColor(0.5)};
    }
  }
  @media only screen and (max-width: 520px) {
    font-size: 16px;
    width: ${props => (props.type === 'big' ? '100%' : '112px')};
    height: 100%;
    border-radius: 5px;
    padding: 0 5px;
    line-height: 42px;
  }
`;
