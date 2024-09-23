import { useLoginMutation, useSignUpMutation } from '@/features/loginForm';
import {
  FormLayout,
  InputWithLabel,
  type UserInfo,
  emailValidation,
  passwordValidation,
  selectEmail,
} from '@/shared';
import * as stylex from '@stylexjs/stylex';
import { memo, useCallback } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<UserInfo>({
    mode: 'onBlur',
    criteriaMode: 'all',
    shouldFocusError: true,
  });
  const { mutate: signUpMutaiton } = useSignUpMutation();
  const { mutate: loginMutation } = useLoginMutation(setError);
  const buttonOptions = {
    command: '시작하기',
    disabled: !isValid,
  };

  const handleSignUp: SubmitHandler<UserInfo> = useCallback(
    async (data) => {
      if (data) {
        const email = await selectEmail(data.email);
        if (!email) signUpMutaiton(data);
        else loginMutation(data);
      }
    },
    [signUpMutaiton, loginMutation],
  );

  return (
    <FormLayout
      buttonOptions={buttonOptions}
      onSubmit={handleSubmit(handleSignUp)}
    >
      <InputWithLabel
        register={register('email', emailValidation)}
        label="이메일"
        placeholder="example@gamil.com"
        type="text"
      />
      <p {...stylex.props(styles.errors)}>{errors.email?.message}</p>

      <InputWithLabel
        register={register('password', passwordValidation)}
        label="비밀번호"
        placeholder="영문포함 8~16자 이내"
        type="password"
      />
      <p {...stylex.props(styles.errors)}>{errors.password?.message}</p>
    </FormLayout>
  );
};

export default memo(LoginForm);

const styles = stylex.create({
  errors: {
    color: '#EE4A4A',
  },
});
