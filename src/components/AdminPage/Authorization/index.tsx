import AdminButton from '@/components/common/AdminButton';
import AdminTitle from '@/components/common/AdminTitle';
import TextInput from '@/components/common/InputFields/TextInput';
import Link from 'next/link';
import styles from './styles.module.scss';

const Authorization = () => {
  return (
    <main className={styles.container}>
      <div className={styles.frame}>
        <AdminTitle title={'Вхід'} />
        <TextInput
          title={'Логін'}
          errorText={''}
          placeholder={'Введіть логін'}
        />
        <TextInput
          title={'Пароль'}
          placeholder={'Введіть пароль'}
          type={'password'}
        />
        <Link href={''} className={styles.text}>
          Забули пароль?
        </Link>
        <AdminButton title={'Увійти'} />
        {process.env.ENABLE_REGISTRATION && (
          <AdminButton title={'Зареєструватися'} />
        )}
      </div>
    </main>
  );
};

export default Authorization;
