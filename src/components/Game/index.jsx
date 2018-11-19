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
    console.log(this.props);
    return (
      <div>
        <GameScore>
          <Button onClick={this.props.resetGame}>new game</Button>
          <Score moves={this.props.moves} />
        </GameScore>
        <Grid numbers={this.props.numbers} eventType={this.props.eventType} />
        <Button type="big">Pause</Button>
      </div>
    );
  }
}
