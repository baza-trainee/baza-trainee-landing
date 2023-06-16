import AdminTitle from '@/components/common/AdminTitle';
import styles from './styles.module.scss';

const Authorization = () => {
  return (
    <section className={styles.container}>
      <div className={styles.frame}>
        <AdminTitle title={'Вхід'} />
      </div>
    </section>
  );
};

export default Authorization;
