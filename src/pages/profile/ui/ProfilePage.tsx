import { PageLayout } from '@/shared';
import { Header } from '@/widgets/header';
import { memo } from 'react';

const ProfilePage = () => {
  return (
    <PageLayout>
      <Header title={'반가워요\n사용하실 이름을 작성해주세요'} />
      {/* TODO:  */}
      {/* <ProfileForm /> */}
    </PageLayout>
  );
};

export default memo(ProfilePage);
