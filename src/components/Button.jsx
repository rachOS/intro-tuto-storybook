import React from 'react';
import './button.css';

export default function Button({ id, title, state, onClick }) {

  return (
    <div className={`${state}`}>
      <button
        id={`button-${id}`}
        className="button"
        onClick={() => onClick()}
        aria-label={`button-${id}`}
      >
        {title}
      </button>
    </div>
  );
}