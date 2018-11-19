import React, { Component, createContext, useState } from 'react';

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const genrateArray = (num, add) => [...Array(num)].map((_, i) => i + add);

export const gameStatus = {
  GAME_IDLE: '__game_idle__',
  GAME_STARTED: '__game_started__',
  GAME_OVER: '__game_over__',
  GAME_PAUSED: '__game_paused__'
};

const swap = (arr, from, to) => {
  arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
  return arr;
};

const isNeighbour = (to, from) => {
  let emptyColumn = Math.floor(to % 4);
  let emptyRow = Math.floor(to / 4);
  let clickedColumn = Math.floor(from % 4);
  let clickedRow = Math.floor(from / 4);

  const sameRow = emptyRow === clickedRow;
  const sameColumn = emptyColumn === clickedColumn;
  const columnDiff = emptyColumn - clickedColumn;
  const rowDiff = emptyRow - clickedRow;
  const diffColumn = Math.abs(columnDiff) === 1;
  const diffRow = Math.abs(rowDiff) === 1;
  const sameRowDiffColumn = sameRow && diffColumn;
  const sameColumnDiffRow = sameColumn && diffRow;
  if (sameRowDiffColumn || sameColumnDiffRow) {
    return true;
  } else {
    return false;
  }
};

const swapSpace = (arr, from, row, col, move) => {
  let yMove = move === 0 ? 1 : move === 2 ? -1 : 0;
  let xMove = move === 3 ? 1 : move === 1 ? -1 : 0;
  let newRow = row + yMove;
  let newCol = col + xMove;
  if (newRow <= -1 || newCol <= -1 || newRow >= 4 || newCol >= 4) {
    return [false, arr];
  }
  let to = newRow * 4 + newCol;
  return [true, swap(arr, from, to)];
};

const shuffle = array_elements => {
  let i = array_elements.length,
    randomNumIndex,
    randomNum;
  while (--i > 0) {
    randomNumIndex = Math.floor(Math.random() * (i + 1));
    randomNum = array_elements[randomNumIndex];
    array_elements[randomNumIndex] = array_elements[i];
    array_elements[i] = randomNum;
  }
  return array_elements;
};

const ValuesContext = createContext({});
const SetValueContext = createContext(() => {});

class GameFactory extends Component {
  defaultState = num => ({
    numbers: shuffle(genrateArray(16, num)),
    moves: 0,
    seconds: 0,
    gameStatus: gameStatus.GAME_IDLE
  });

  state = this.defaultState(1);

  reset = () => {
    this.setState(this.defaultState(18));
    setTimeout(() => {
      this.setState(this.defaultState(1));
      if (this.timerId) {
        clearInterval(this.timerId);
      }
    }, 100);
  };

  gettingEmptyBoxLocation = () => {
    let location = this.state.numbers.indexOf(16);
    let column = Math.floor(location % 4);
    let row = Math.floor(location / 4);
    return [row, column, location];
  };

  move = (from, row, col, moveType) => {
    this.setState(prevState => {
      const [updated, newNumList] = swapSpace(
        prevState.numbers,
        from,
        row,
        col,
        moveType
      );
      if (updated) {
        if (prevState.moves === 0) {
          this.setTimer();
        }
        return {
          number: newNumList,
          moves: prevState.moves + 1
        };
      }
    });
  };

  addTimer = () => {
    this.setState(prevState => {
      return { seconds: prevState.seconds + 1 };
    });
  };

  setTimer = () => {
    this.timerId = setInterval(() => {
      this.addTimer();
    }, 1000);
  };

  clickMove = from => {
    this.setState(prevState => {
      let to = prevState.numbers.indexOf(16);
      if (isNeighbour(to, from)) {
        const newNumList = swap(prevState.numbers, to, from);
        if (prevState.moves === 0) {
          this.setTimer();
        }
        return {
          number: newNumList,
          moves: prevState.moves + 1
        };
      }
    });
  };
  render() {
    return (
      <ValuesContext.Provider value={this.state}>
        <SetValueContext.Provider
          value={{
            resetGame: this.reset,
            setTimer: this.setTimer,
            gettingEmptyBoxLocation: this.gettingEmptyBoxLocation,
            moveCell: this.move,
            clickMove: this.clickMove
          }}
        >
          {this.props.children}
        </SetValueContext.Provider>
      </ValuesContext.Provider>
    );
  }
}

export const GameFactoryConsumer = ({ children }) => {
  return (
    <ValuesContext.Consumer>
      {values => (
        <SetValueContext.Consumer>
          {methods => children({ values, methods })}
        </SetValueContext.Consumer>
      )}
    </ValuesContext.Consumer>
  );
};

export default GameFactory;
