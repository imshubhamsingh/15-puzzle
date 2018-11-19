import React, { Component } from 'react';
import { GridContainer, GameFactoryConsumer } from '@Elements';

import Cell from '../Cell';

// numbers={this.props.numbers}
// eventType={this.props.eventType}
// status={this.props.gameStatus}
// onClick={this.props.clickMove}
export default class Grid extends Component {
  cellRender(number, methods) {
    return number.map((i, _) => (
      <Cell key={_} number={i} index={_} clickMove={methods.clickMove} />
    ));
  }
  render() {
    return (
      <GameFactoryConsumer>
        {({ values, methods }) => (
          <GridContainer>
            {this.cellRender(values.numbers, methods)}
          </GridContainer>
        )}
      </GameFactoryConsumer>
    );
  }
}
