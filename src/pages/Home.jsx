import React, { Component } from 'react';

import { KeyBoardManagar } from '@HOC';
class Home extends Component {
  render() {
    return (
      <div id="home">
        {this.props.event} | {this.props.movement}
      </div>
    );
  }
}

export default KeyBoardManagar(Home);
