import Authorization from '@/components/AdminPage/Authorization';
import { WithAuth } from '@/components/AdminPage/WithAuth';

const Login = () => {
  return (
    <WithAuth>
      <Authorization />
    </WithAuth>
  );
};

export default Login;
