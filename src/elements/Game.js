import React, { Component, createContext, useState } from 'react';

// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const solution = () => [...Array(16)].map((_, i) => i + 1);

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const ValuesContext = createContext({});
const SetValueContext = createContext(() => {});

class GameFactory extends Component {
  defaultState = (num, add) => [...Array(num)].map((_, i) => i + add);
  state = {
    numbers: this.defaultState(16, 1)
  };

  reset = () => {
    this.setState({
      numbers: this.defaultState(16, 18)
    });
    setTimeout(() => {
      this.setState(() => ({
        numbers: shuffle(this.defaultState(16, 1))
      }));
    }, 100);
  };

  render() {
    return (
      <ValuesContext.Provider value={this.state}>
        <SetValueContext.Provider
          value={{
            resetGame: this.reset
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
