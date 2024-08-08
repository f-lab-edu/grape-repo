import { ChevronLeftIcon, PlusIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { useRouter } from '@tanstack/react-router';

import { memo } from 'react';

type HeaderProps = {
  isBackIconVisible?: boolean;
  isPlusIconVisible?: boolean;
  title?: React.ReactNode;
  path?: string;
};

const Header = (props: HeaderProps) => {
  const router = useRouter();
  const { isBackIconVisible = false, isPlusIconVisible = false, title } = props;

  const onBack = () => router.history.back();

  return (
    <div {...stylex.props(styles.box)}>
      <div {...stylex.props(styles.icons)}>
        {isBackIconVisible && (
          <ChevronLeftIcon
            width={30}
            height={30}
            cursor={'pointer'}
            onClick={onBack}
          />
        )}

        {isPlusIconVisible && (
          <PlusIcon width={30} height={30} cursor={'pointer'} color="#9e9e9e" />
        )}
      </div>

      {title && <div {...stylex.props(styles.text)}>{title}</div>}
    </div>
  );
};

export default memo(Header);

const styles = stylex.create({
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
    minHeight: '170px',
  },

  text: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 600,
    whiteSpace: 'pre',
  },

  icons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
