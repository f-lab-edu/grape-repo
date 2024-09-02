import { useNavigate } from '@tanstack/react-router';
import { Button } from 'antd';

const ErrorPage = ({ onClick }: { onClick?: () => void }) => {
  const navigate = useNavigate();
  return (
    <div>
      There was an error!
      <Button onClick={() => navigate({ to: '/' })}>Go to home</Button>
      <Button onClick={onClick}>Try again</Button>
    </div>
  );
};

export default ErrorPage;
