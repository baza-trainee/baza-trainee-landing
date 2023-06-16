import styles from './styles.module.scss';

const TextInput = ({ title = '', type = 'text', placeholder = '' }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <input
        type={type}
        className={`${styles.input}`}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default TextInput;
