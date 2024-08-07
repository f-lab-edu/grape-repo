import { ButtonBoxLayout, DefaultButton, PageLayout } from '@/shared';
import { Header } from '@/widgets/header';
import * as stylex from '@stylexjs/stylex';
import { useNavigate } from '@tanstack/react-router';
import { memo } from 'react';

const HomePage = () => {
  const navigate = useNavigate({ from: '/' });
  const goToLogin = () => navigate({ to: '/login' });

  return (
    <PageLayout>
      <div {...stylex.props(styles.content)}>
        <Header />
        <div>홈</div>
      </div>
      <ButtonBoxLayout>
        <DefaultButton command="카카오로 시작하기" style={styles.kakaoButton} />
        <DefaultButton command="이메일로 시작하기" onClick={goToLogin} />
      </ButtonBoxLayout>
    </PageLayout>
  );
};

export default memo(HomePage);

const styles = stylex.create({
  content: {
    height: '100%',
  },

  kakaoButton: {
    backgroundColor: {
      default: '#F6E10C',
      ':hover': {
        default: 'rgba(246, 225, 12, 0.6)',
      },
    },
    borderColor: {
      default: 'rgba(246, 225, 12, 0.6)',
    },
    color: '#000000',
  },
});
