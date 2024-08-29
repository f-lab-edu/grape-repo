import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Input } from 'antd';
import { memo } from 'react';

const SearchBar = () => {
  return (
    <div {...stylex.props(styles.box)}>
      <Input
        prefix={<MagnifyingGlassIcon width={20} height={20} />}
        placeholder="친구 이름"
        styles={{
          input: {
            padding: '10px 15px',
          },
          affixWrapper: {
            border: 'none',
            borderRadius: '26px',
            backgroundColor: 'rgba(220, 201, 235, 0.2)',
          },
        }}
        type="text"
      />
    </div>
  );
};

export default memo(SearchBar);

const styles = stylex.create({
  box: {
    padding: '24px 0',
  },
});
