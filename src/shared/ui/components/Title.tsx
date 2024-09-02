import type { TitleType } from '@/shared/types/client';
import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

const Title = ({ text, style }: TitleType) => {
  return (
    <p {...stylex.props(styles.textEllipsis, styles.title, style)}>{text}</p>
  );
};

export default memo(Title);

const styles = stylex.create({
  title: {
    fontSize: '13px',
    fontWeight: 400,
  },

  textEllipsis: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});
