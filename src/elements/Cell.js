import styled from 'styled-components';
import { color } from '@Utils';

const GridCell = styled.div`
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
