import React, { Component, createContext, useState } from 'react';

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const genrateArray = (num, add) => [...Array(num)].map((_, i) => i + add);

export const gameStatus = {
  GAME_IDLE: '__game_idle__',
  GAME_STARTED: '__game_started__',
  GAME_OVER: '__game_over__',
  GAME_PAUSED: '__game_paused__'
};

const swap = (arr, from, row, col, move) => {
  let yMove = move === 0 ? 1 : move === 2 ? -1 : 0;
  let xMove = move === 3 ? 1 : move === 1 ? -1 : 0;
  let newRow = row + yMove;
  let newCol = col + xMove;
  if (newRow <= -1 || newCol <= -1 || newRow >= 4 || newCol >= 4) {
    return [false, arr];
  }
  let to = newRow * 4 + newCol;
  arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
  return [true, arr];
};

const shuffle = (arr, size) => {
  let shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(0, size);
};

const ValuesContext = createContext({});
const SetValueContext = createContext(() => {});

class GameFactory extends Component {
  defaultState = num => ({
    numbers: shuffle(genrateArray(16, num), 16),
    moves: 0,
    seconds: 0,
    gameStatus: gameStatus.GAME_IDLE
  });

  state = this.defaultState(1);

  reset = () => {
    this.setState(this.defaultState(18));
    setTimeout(() => {
      this.setState(this.defaultState(1));
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
      const [updated, newNumList] = swap(
        prevState.numbers,
        from,
        row,
        col,
        moveType
      );
      if (updated) {
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

  setTimer() {
    this.timerId = setInterval(() => {
      this.addTimer();
    }, 1000);
  }

  render() {
    return (
      <ValuesContext.Provider value={this.state}>
        <SetValueContext.Provider
          value={{
            resetGame: this.reset,
            setTimer: this.setTimer,
            gettingEmptyBoxLocation: this.gettingEmptyBoxLocation,
            moveCell: this.move
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
