import React from 'react';

import './index.css';

interface Props {
  /** Button text */
  text: string;

  /** Whether or not the button is disabled */
  disabled?: boolean;

  /** Button class to use for styling */
  className?: 'primary' | 'regal';

  /** Onclick handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: Props) => {
  const { text, disabled, onClick, className } = props;

  return (
    <>
      <button
        onClick={disabled ? undefined : onClick}
        className={className}
        disabled={disabled ? true : false}
      >
        {text}
      </button>
    </>
  );
};
