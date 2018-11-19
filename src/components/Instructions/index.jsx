import React, { useState, useEffect } from 'react';
import {
  GameInstruction,
  Icon,
  Keys,
  GameInstructionContainer
} from '@Elements';
import { color } from '@Utils';

const KeyButton = ({ currentKey, index }) => {
  return (
    <Icon
      name="key"
      size={40}
      color={
        currentKey == index
          ? color.primaryFontColor(1)
          : color.primaryFontColor(0.3)
      }
      rotate={(index - 1) * 90}
      move={currentKey == index ? `translate3d(0px,-5px,0)` : null}
      fillColor={
        currentKey == index
          ? color.primaryFontColor(0.3)
          : color.primaryFontColor(0)
      }
    />
  );
};
const Instructions = () => {
  const [key, moveKey] = useState(null);

  useEffect(() => {
    let timer1 = index => setTimeout(() => moveKey(index), index * 350);
    for (let i = 1; i <= 5; i++) {
      timer1(i);
    }
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <GameInstructionContainer>
      <Keys>
        <KeyButton currentKey={key} index={1} />
        <br />
        <span className="bottom-keys">
          <KeyButton currentKey={key} index={4} />
          <KeyButton currentKey={key} index={3} />
          <KeyButton currentKey={key} index={2} />
        </span>
      </Keys>
      <GameInstruction>
        Move tiles in grid <br /> to order them from <strong>1 to 15.</strong>
      </GameInstruction>
    </GameInstructionContainer>
  );
};

export default Instructions;
