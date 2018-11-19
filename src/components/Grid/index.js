import React, { Component } from 'react';
import { GridContainer } from '@Elements';

import Cell from '../Cell';

export default class Grid extends Component {
  cellRender(number) {
    return number.map((i, _) => <Cell key={_} number={i} index={_} />);
  }
  render() {
    return <GridContainer>{this.cellRender(this.props.numbers)}</GridContainer>;
  }
}
