import styles from './styles.module.scss';

const AdminButton = ({ title = '', ...rest }) => {
  return (
    <button className={styles.container} {...rest}>
      {title}
    </button>
  );
};

export default AdminButton;
