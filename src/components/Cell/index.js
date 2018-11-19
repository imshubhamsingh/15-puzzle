import React, { Component, useState, useEffect } from 'react';

import { CellContainer, NumberCellContainer } from '@Elements';
const moveKey = ({ x, y }) => {
  const [moveX, handleX] = useState(0);
  const [moveY, handleY] = useState(0);

  useEffect(
    () => {
      handleX(currentX => currentX + x);
      handleY(currentY => currentY + y);
    },
    [moveX, moveY]
  );

  return { x, y };
};

export default class Cell extends Component {
  render() {
    //const { x, y } = moveKey(this.props.x, this.props.y);
    const { number, index } = this.props;
    return (
      <CellContainer>
        <NumberCellContainer
          number={number}
          index={index + 1}
          onClick={() => {
            this.props.clickMove(index);
          }}
        >
          <div className="ball-1" />
          <div className="ball-2" />
          <div className="number">{number}</div>
          <div className="shadow">{number}</div>
        </NumberCellContainer>
      </CellContainer>
    );
  }
}
