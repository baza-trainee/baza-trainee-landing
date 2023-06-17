'use client';
import EyeClosed from '@/components/common/icons/EyeClosed';
import EyeOpen from '@/components/common/icons/EyeOpen';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const TextInput = ({ title = '', errorText = '', type = 'text', ...rest }) => {
  const [inputType, setInputType] = useState(type);
  const [icon, setIcon] = useState<React.ReactElement | null>();

  const iconClickHandler = () => {
    if (type === 'password') {
      setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
    }
  };

  useEffect(() => {
    const iconSelector = () => {
      if (type === 'password') {
        return inputType === 'password' ? <EyeOpen /> : <EyeClosed />;
      }
    };
    setIcon(iconSelector);
  }, [inputType, type]);

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
          {icon}
        </div>
      </div>
      {errorText && (
        <p className={`${styles.error} ${styles['error-text']}`}>{errorText}</p>
      )}
    </div>
  );
};

export default TextInput;
