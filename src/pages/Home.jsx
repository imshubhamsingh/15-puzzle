import React, { Component } from 'react';
import { KeyBoardManagar } from '@HOC';

import { Instruction, Header } from '@Components';

import { Container } from '@Elements';
class Home extends Component {
  render() {
    return (
      <Container>
        {this.props.event} | {this.props.movement}
        <div>
          <Header />
          {/* <Game /> */}
          <Instruction />
        </div>
      </Container>
    );
  }
}

export default KeyBoardManagar(Home);
