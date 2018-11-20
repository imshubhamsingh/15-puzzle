import React, { Component } from 'react';
import styled from 'styled-components';

import { Portal, elevation, bounceInUp, fadeIn, color } from '@Utils';

export default class Modal extends Component {
  render() {
    const { children, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>{children}</ModalCard>
            <Background />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  color: ${color.modalTextColor};
  position: relative;
  z-index: 10000;
  animation-duration: 0.75s;
  animation-name: ${bounceInUp};

  border-radius: 10px;
  padding: 15px;
  min-width: 320px;
  background-color: ${color.modalBackgroundColor};
  height: 200px;
  ${elevation}
  @media screen and (max-width: 520px) {
    min-width: 284px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  animation-duration: 0.75s;
  animation-name: ${fadeIn};
  height: 100%;
  opacity: 0.3;
  background: ${color.overlayBackgroundColor};
`;
