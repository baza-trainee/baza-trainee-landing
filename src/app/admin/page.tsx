import Authorization from '@/components/AdminPage/Authorization';
import styles from './styles.module.scss';
const AdminLogin = () => {
  return (
    <div className={styles.container}>
      <Authorization />
    </div>
  );
};

export default AdminLogin;
