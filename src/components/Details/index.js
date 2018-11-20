import React, { Component } from 'react';

import { Footer, Profile, Icon } from '@Elements';

const Details = ({ name, githubURL, linkedinURL, twitterURL, projectURL }) => (
  <Footer>
    <div className="text">
      Made with <span style={{ color: 'red' }}>❤</span> by {name}
      <br />
      This project is open source, visit{' '}
      <a href={projectURL} target="_blank">
        the repo.
      </a>
    </div>
    <div className="logos">
      <Profile href={githubURL} target="_blank">
        <Icon name="github" />
      </Profile>
      <Profile href={linkedinURL} target="_blank">
        <Icon name="linkedin" />
      </Profile>
      <Profile href={twitterURL} target="_blank">
        <Icon name="twitter" />
      </Profile>
    </div>
  </Footer>
);

export default Details;
