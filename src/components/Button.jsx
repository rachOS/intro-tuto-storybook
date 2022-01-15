import React from 'react';
import './button.css';

export default function Button({ id, text, theme, handleClick }) {
  return (
    <button
      id={`button-${id}`}
      className={`button ${theme}`}
      onClick={(e) => handleClick(e)}
      aria-label={`button-${id}`}
    >
      {text}
    </button>
  );
}
