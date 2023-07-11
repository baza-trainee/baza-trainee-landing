import { AlertWindow } from '../../components/atomic/AlertWindow';
import styles from './styles.module.scss';
const AdminLogin = () => {
  return (
    <div className={styles.container}>
      {/*<Authorization />*/}
      <AlertWindow />
    </div>
  );
};

export default AdminLogin;
