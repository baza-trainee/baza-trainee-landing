import styles from './styles.module.scss';

const AdminButton = ({ title = '' }) => {
  return (
    <button className={styles.container}>
      <h4 className={styles.header}>{title}</h4>;
    </button>
  );
};

export default AdminButton;
