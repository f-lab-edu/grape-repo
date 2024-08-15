import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

type BubbleProps = {
  data: {
    id: number;
    text: string;
  };
};

const Bubble = ({ data }: BubbleProps) => {
  const { id, text } = data;
  const isOdd = id % 2 === 1;

  return (
    <div {...stylex.props(isOdd ? styles.rightPosition : styles.leftPosition)}>
      <div {...stylex.props(styles.base, isOdd && styles.rightBubble)}>
        {text}
      </div>
    </div>
  );
};

export default memo(Bubble);

const styles = stylex.create({
  leftPosition: {
    display: 'flex',
  },

  rightPosition: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: '20px',
  },

  base: {
    padding: '10px 15px',
    background: '#DCC9EB',
    borderRadius: '30px',
    fontWeight: 300,
    fontSize: '14px',
  },

  rightBubble: {
    background: '#FEFEFF',
    borderColor: '#DCC9EB',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '30px',
  },
});
