export interface ButtonProps {
  /** Button text */
  text: string;

  /** Whether or not the button is disabled */
  disabled?: boolean;

  /** Button class to use for styling */
  className?: 'primary' | 'regal';

  /** Onclick handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
