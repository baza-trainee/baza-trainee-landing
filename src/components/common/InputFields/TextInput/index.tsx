'use client';
import { useState } from 'react';
import EyeClosed from '../../icons/EyeClosed';
import EyeOpen from '../../icons/EyeOpen';
import styles from './styles.module.scss';

const typeSelector = (type: string) => {
  return type;
};

const TextInput = ({ title = '', errorText = '', type = 'text', ...rest }) => {
  const [inputType, setInputType] = useState(typeSelector(type));

  const iconClickHandler = () => {
    if (type === 'password') {
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    }
  };

  const iconSelector = () => {
    if (type === 'password') {
      return inputType === 'password' ? <EyeOpen /> : <EyeClosed />;
    }
  };

  return (
    <div className={styles.container}>
      <h4 className={`${styles.title} ${errorText && styles.error}`}>
        {title}
      </h4>
      <div className={styles['input-wrapper']}>
        <input
          type={inputType}
          className={`${styles.input} ${
            errorText && `${styles.error} ${styles['error-border']}`
          }`}
          {...rest}
        />
        <div className={styles['icon-wrapper']} onClick={iconClickHandler}>
          {iconSelector()}
        </div>
      </div>
      {errorText && (
        <p className={`${styles.error} ${styles['error-text']}`}>{errorText}</p>
      )}
    </div>
  );
};

export default TextInput;
