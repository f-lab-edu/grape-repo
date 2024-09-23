import { FormLayout, InputWithLabel, type UserName } from '@/shared';
import { PersonIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { Avatar } from 'antd';
import { memo, useCallback } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useUserNameMutation } from '..';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserName>({
    mode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });
  const { mutate } = useUserNameMutation();
  const buttonOptions = {
    command: '확인',
    disabled: !isValid,
  };

  const updateUserName: SubmitHandler<UserName> = useCallback(
    (data) => {
      mutate(data);
    },
    [mutate],
  );

  return (
    <FormLayout
      buttonOptions={buttonOptions}
      onSubmit={handleSubmit(updateUserName)}
    >
      <div {...stylex.props(styles.flexColumn)}>
        <p {...stylex.props(styles.label)}>프로필 사진</p>

        <div {...stylex.props(styles.justifyContent)}>
          <Avatar size={100} icon={<PersonIcon width={60} height={60} />} />
        </div>
      </div>

      <InputWithLabel
        label="이름"
        type="text"
        register={register('userName', {
          required: '이름을 입력해주세요',
          maxLength: 5,
          validate: {
            noWhitespace: (value) => {
              return !/\s/.test(value) || '이름에 공백을 포함할 수 없습니다';
            },
          },
        })}
      />
      <p {...stylex.props(styles.errors)}>{errors.userName?.message}</p>
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
    color: '#a3a3a3',
    fontSize: '14px',
  },

  errors: {
    color: '#EE4A4A',
  },
});
