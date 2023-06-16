import Authorization from '@/components/AdminPage/Authorization';
import Header from '@/components/MainPage/Header';
import styles from './styles.module.scss';
const AdminLogin = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Authorization />
    </div>
  );
};

export default AdminLogin;
