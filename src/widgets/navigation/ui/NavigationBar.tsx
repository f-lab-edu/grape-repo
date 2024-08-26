import { useChat } from '@/features/chat';
import { navList } from '@/shared';
import * as stylex from '@stylexjs/stylex';
import { memo } from 'react';

type NavItemType = {
  children: React.ReactNode;
  isClicked: boolean;
  onClick: () => void;
};

type NavigationBarType = {
  onClick: (i: number) => void;
};

const NavigationBar = ({ onClick }: NavigationBarType) => {
  const { selectedNavItem } = useChat();

  return (
    <nav {...stylex.props(styles.box)}>
      {navList.map((title, i) => (
        <NavItem
          key={title}
          isClicked={title === selectedNavItem}
          onClick={() => onClick(i)}
        >
          {title}
        </NavItem>
      ))}
    </nav>
  );
};

const NavItem = ({ children, isClicked, onClick }: NavItemType) => {
  return (
    <div
      {...stylex.props(styles.flexCenter, isClicked && styles.isClicked)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default memo(NavigationBar);

const styles = stylex.create({
  box: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '50px',
    gap: '50px',
    fontWeight: 600,
    cursor: 'pointer',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#dedede',
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  isClicked: {
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'black',
  },
});
