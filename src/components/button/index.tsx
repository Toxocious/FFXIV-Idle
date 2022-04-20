import { ButtonProps } from '../../types/button';

import './button.css';

export const Button = (props: ButtonProps) => {
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
