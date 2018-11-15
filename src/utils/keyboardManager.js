class KeyBoardManager {
  constructor() {
    this.events = {};

    if (window.navigator.msPointerEnabled) {
      //Internet Explorer 10 style
      this.eventTouchstart = 'MSPointerDown';
      this.eventTouchmove = 'MSPointerMove';
      this.eventTouchend = 'MSPointerUp';
    } else {
      this.eventTouchstart = 'touchstart';
      this.eventTouchmove = 'touchmove';
      this.eventTouchend = 'touchend';
    }

    this.listen();
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    const callbacks = this.events[event];
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(data);
      });
    }
  }

  listen() {
    const self = this;

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
    document.addEventListener('keydown', event => {
      const modifiers =
        event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
      const mapped = map[event.which];

      if (!modifiers) {
        if (mapped !== undefined) {
          event.preventDefault();
          self.emit('move', mapped);
        }
      }

      // R key restarts the game
      if (!modifiers && event.which === 82) {
        self.restart.call(self, event);
      }
    });
  }

  restart(event) {
    event.preventDefault();
    this.emit('restart');
  }

  keepPlaying(event) {
    event.preventDefault();
    this.emit('keepPlaying');
  }
}
