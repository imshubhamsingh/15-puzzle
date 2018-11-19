import React, { Component } from 'react';
import { GameScore, Button } from '@Elements';
import Score from '../Score';
import Grid from '../Grid';
export default class Game extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.eventType !== this.props.eventType) {
      //Perform some operation here
      const [eventType, move] = this.props.eventType || [null, null];
      const [row, col, location] = this.props.gettingEmptyBoxLocation();
      this.props.moveCell(location, row, col, move);
    }
  }

  render() {
    return (
      <div>
        <GameScore>
          <Button onClick={this.props.resetGame}>new game</Button>
          <Score moves={this.props.moves} seconds={this.props.seconds} />
        </GameScore>
        <Grid />
        <Button type="big" onClick={() => {}}>
          Pause
        </Button>
      </div>
    );
  }
}
