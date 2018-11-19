import React, { useState, useEffect } from 'react';

const useMovement = () => {
  const [event, handleEvent] = useState(null);

  const emit = (event, data) => {
    handleEvent([event, data]);
  };

  const map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3 // A
  };

  // Respond to direction keys
  const handleKey = event => {
    const modifiers =
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    const mapped = map[event.which];
    if (!modifiers) {
      if (mapped !== undefined) {
        event.preventDefault();
        emit('move', mapped);
      }
    }

    // R key restarts the game
    if (!modifiers && event.which === 82) {
      restart.call(self, event);
    }
  };

  const listenKey = () => {
    window.document.addEventListener('keydown', handleKey);
  };

  const restart = event => {
    event.preventDefault();
    emit('restart');
  };

  const keepPlaying = event => {
    event.preventDefault();
    emit('keepPlaying');
  };

  let eventTouchstart = null,
    eventTouchmove = null,
    eventTouchend = null,
    touchStartClientX = null,
    touchStartClientY = null;

  if (window.navigator.msPointerEnabled) {
    //Internet Explorer 10 style
    eventTouchstart = 'MSPointerDown';
    eventTouchmove = 'MSPointerMove';
    eventTouchend = 'MSPointerUp';
  } else {
    eventTouchstart = 'touchstart';
    eventTouchmove = 'touchmove';
    eventTouchend = 'touchend';
  }

  const eventTouchStartListner = event => {
    if (
      (!window.navigator.msPointerEnabled && event.touches.length > 1) ||
      event.targetTouches > 1
    ) {
      return; // Ignore if touching with more than 1 finger
    }

    if (window.navigator.msPointerEnabled) {
      touchStartClientX = event.pageX;
      touchStartClientY = event.pageY;
    } else {
      touchStartClientX = event.touches[0].clientX;
      touchStartClientY = event.touches[0].clientY;
    }

    //event.preventDefault();
  };

  const eventTouchmoveListner = event => {
    // event.preventDefault();
  };

  const eventTouchendListner = event => {
    if (
      (!window.navigator.msPointerEnabled && event.touches.length > 0) ||
      event.targetTouches > 0
    ) {
      return; // Ignore if still touching with one or more fingers
    }

    let touchEndClientX;
    let touchEndClientY;

    if (window.navigator.msPointerEnabled) {
      touchEndClientX = event.pageX;
      touchEndClientY = event.pageY;
    } else {
      touchEndClientX = event.changedTouches[0].clientX;
      touchEndClientY = event.changedTouches[0].clientY;
    }

    const dx = touchEndClientX - touchStartClientX;
    const absDx = Math.abs(dx);

    const dy = touchEndClientY - touchStartClientY;
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) > 10) {
      // (right : left) : (down : up)
      emit('move', absDx > absDy ? (dx > 0 ? 1 : 3) : dy > 0 ? 2 : 0);
    }
  };

  const listenSwipe = () => {
    window.document.addEventListener(eventTouchstart, eventTouchStartListner);
    window.document.addEventListener(eventTouchmove, eventTouchmoveListner);
    window.document.addEventListener(eventTouchend, eventTouchendListner);
  };

  const removeEventListeners = () => {
    window.document.removeEventListener('keydown', handleKey);
    window.document.removeEventListener(
      eventTouchstart,
      eventTouchStartListner
    );
    window.document.removeEventListener(eventTouchmove, eventTouchmoveListner);
    window.document.removeEventListener(eventTouchend, eventTouchendListner);
  };

  useEffect(() => {
    listenKey();
    listenSwipe();
    return () => removeEventListeners();
  });

  return event;
};

const KeyBoardManager = PassedComponent => props => {
  const eventType = useMovement();
  return <PassedComponent eventType={eventType} {...props} />;
};

export default KeyBoardManager;
