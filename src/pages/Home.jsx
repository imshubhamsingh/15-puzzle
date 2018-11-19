import React, { Fragment } from 'react';
import { KeyBoardManagar } from '@HOC';

import { Instruction, Header, Game } from '@Components';
import { Container, Wave, GameFactoryConsumer } from '@Elements';

import Waves from '@Image/waves.gif';

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
              <Wave className="waves" src={Waves} alt="" />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
