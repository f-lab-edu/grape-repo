import * as stylex from '@stylexjs/stylex';
import type {
  CompiledStyles,
  StyleXArray,
} from '@stylexjs/stylex/lib/StyleXTypes';
import { memo } from 'react';

type ButtonProps = {
  command: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'submit' | 'button' | 'reset' | undefined;
  style?: StyleXArray<boolean | CompiledStyles | null | undefined>;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const DefaultButton = ({
  command,
  style,
  disabled = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...stylex.props(
        styles.base,
        disabled ? styles.disabled : styles.base,
        style,
      )}
      {...props}
    >
      {icon && icon}
      {command}
    </button>
  );
};

export default memo(DefaultButton);

const styles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    minHeight: '60px',
    background: {
      default: 'rgba(220, 201, 235, 0.4)',
      ':hover': {
        default: 'rgba(220, 201, 235, 0.6)',
      },
      ':active': {
        default: '#DCC9EB',
      },
    },
    borderStyle: 'none',
    borderRadius: '30px',
    borderColor: {
      default: '#DCC9EB',
    },
    fontWeight: 600,
    fontSize: '17px',
    color: '#6C3C91',
    cursor: 'pointer',
  },

  disabled: {
    backgroundColor: '#E1E0E2',
    color: '#A3A3A3',
  },
});
