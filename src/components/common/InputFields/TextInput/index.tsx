import styles from './styles.module.scss';

const TextInput = ({
  title = '',
  errorText = '',
  type = 'password',
  ...rest
}) => {
  return (
    <div className={styles.container}>
      <h4 className={`${styles.title} ${errorText && styles.error}`}>
        {title}
      </h4>

      <input
        type={type}
        className={`${styles.input} ${
          errorText && `${styles.error} ${styles['error-border']}`
        }`}
        {...rest}
      ></input>

      {errorText && (
        <p className={`${styles.error} ${styles['error-text']}`}>{errorText}</p>
      )}
    </div>
  );
};

export default TextInput;
