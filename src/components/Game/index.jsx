import React, { Component } from 'react';
import { GameScore, Button, GameFactoryConsumer } from '@Elements';
import Score from '../Score';
import Grid from '../Grid';
export default class Game extends Component {
  render() {
    return (
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <div>
              <GameScore>
                <Button onClick={methods.resetGame}>new game</Button>
                <Score />
              </GameScore>
              <Grid numbers={values.numbers} />
              <Button type="big">Pause</Button>
            </div>
          );
        }}
      </GameFactoryConsumer>
    );
  }
}
