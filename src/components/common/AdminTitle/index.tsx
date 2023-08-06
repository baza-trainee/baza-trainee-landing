import styles from './styles.module.scss';

const AdminTitle = ({ title = '' }) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export default AdminTitle;
