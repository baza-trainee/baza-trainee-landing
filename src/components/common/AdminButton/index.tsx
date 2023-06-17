import styles from './styles.module.scss';

const AdminButton = ({ title = '' }) => {
  return <button className={styles.container}>{title}</button>;
};

export default AdminButton;
