import { LoginForm } from '@/features/loginForm';
import { PageLayout } from '@/shared';
import { Header } from '@/widgets/header';
import { memo } from 'react';

const LoginPage = () => {
  return (
    <PageLayout>
      <Header isBackIconVisible title={'이메일로\n간편하게 가입해요'} />
      <LoginForm />
    </PageLayout>
  );
};

export default memo(LoginPage);
