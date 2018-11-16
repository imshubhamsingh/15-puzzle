import styled from 'styled-components';
import { color, transition } from '@Utils';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  @media screen and (max-width: 520px) {
    width: 280px;
    margin: 0 auto;
  }
`;
export const GridCell = styled.div`
  width: 106.25px;
  height: 106.25px;
  margin-right: 15px;
  float: left;
  border-radius: 10px;
  background-color: ${color.gridTileColor};

  @media screen and (max-width: 520px) {
    width: 57.5px;
    height: 57.5px;
    margin-right: 10px;
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
