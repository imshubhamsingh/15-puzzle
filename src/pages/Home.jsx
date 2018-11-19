import React from 'react';
import { KeyBoardManagar } from '@HOC';

import { Instruction, Header, Game } from '@Components';
import { Container, Wave, GameFactory } from '@Elements';

import Waves from '@Image/waves.gif';

const Home = ({ event }) => {
  return (
    <GameFactory>
      <Container>
        {console.log(event)}
        <div>
          <Header />
          <br />
          <Game event={event} />
          <br />
          <Instruction />

          <Wave className="waves" src={Waves} alt="" />
          {/* <PersonalInfo/> */}
        </div>
      </Container>
    </GameFactory>
  );
};

export default KeyBoardManagar(Home);
