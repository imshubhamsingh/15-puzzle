import React, { Component } from 'react';

export const Icon = props => {
  const { size, color } = props;
  switch (props.name) {
    case 'key': {
      const { rotate, fillColor, move } = props;
      return (
        <svg
          height={size}
          viewBox="0 0 73 73"
          width={size}
          style={{ transform: `rotate(${rotate}deg)`, margin: `0 2px` }}
        >
          <rect
            x="1.5"
            y="1.5"
            width="70"
            height="70"
            rx="10.5"
            ry="10.5"
            fill={fillColor}
          />
          <path
            stroke={color}
            fill={color}
            d="M61 3a9 9 0 0 1 9 9v49a9 9 0 0 1-9 9H12a9 9 0 0 1-9-9V12a9 9 0 0 1 9-9h49m0-3H12A12 12 0 0 0 0 12v49a12 12 0 0 0 12 12h49a12 12 0 0 0 12-12V12A12 12 0 0 0 61 0z"
          />
          <path
            style={{ transform: move }}
            d="M17.75 45.75l17.32-16.44a3.11 3.11 0 0 1 4.3.06l15.88 15.88"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="3"
          />
        </svg>
      );
    }
    case 'play': {
      return (
        <svg
          height={size}
          width={size}
          viewBox="0 0 512 512"
          style={{ ...props.style }}
        >
          <path
            fill={color}
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
          />
        </svg>
      );
    }
  }
};
