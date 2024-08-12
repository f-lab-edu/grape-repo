import { signInWithKakao } from '@/pages/home';
import {
  ButtonBoxLayout,
  DefaultButton,
  KakaoIcon,
  PageLayout,
} from '@/shared';
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
        <DefaultButton
          command="카카오 로그인"
          style={styles.kakaoButton}
          icon={<KakaoIcon />}
          onClick={signInWithKakao}
        />
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

  borderRadius: {
    borderRadius: '12px',
  },

  kakaoButton: {
    backgroundColor: {
      default: '#FEE500',
      ':hover': {
        default: 'rgba(246, 225, 12, 0.6)',
      },
    },
    borderColor: {
      default: 'rgba(246, 225, 12, 0.6)',
    },
    color: '#000000 85%',
  },
});
