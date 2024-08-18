import { FormLayout, InputWithLabel } from '@/shared';
import { PersonIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Avatar, Form } from 'antd';
import { memo, useCallback, useState } from 'react';
import { useUserNameMutation } from '..';

const ProfileForm = () => {
  const [userName, setUserName] = useState<string>('');

  const { mutate } = useUserNameMutation({
    onError: () => {
      form.setFields([
        {
          name: 'userName',
          errors: ['이름을 입력해주세요'],
        },
      ]);
    },
  });
  const [form] = Form.useForm();

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [],
  );

  const updateUserName = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (userName) mutate(userName);
    },
    [userName, mutate],
  );

  return (
    <FormLayout form={form} onClick={updateUserName} buttonCommand="확인">
      <div {...stylex.props(styles.flexColumn)}>
        <p {...stylex.props(styles.label)}>프로필 사진</p>

        <div {...stylex.props(styles.justifyContent)}>
          <Avatar size={100} icon={<PersonIcon width={60} height={60} />} />
        </div>
      </div>

      <Form.Item
        name="userName"
        rules={[{ required: true, message: '이름을 입력해주세요' }]}
      >
        <InputWithLabel
          label="이름"
          name="userName"
          value={userName}
          onChange={onChangeInput}
          type="text"
        />
      </Form.Item>
    </FormLayout>
  );
};

export default memo(ProfileForm);

const styles = stylex.create({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  justifyContent: {
    display: 'flex',
    justifyContent: 'center',
  },

  label: {
    margin: 0,
    color: '#a3a3a3',
    fontSize: '14px',
  },
});
