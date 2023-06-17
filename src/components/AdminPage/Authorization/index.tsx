import AdminButton from '@/components/common/AdminButton';
import AdminTitle from '@/components/common/AdminTitle';
import TextInput from '@/components/common/InputFields/TextInput';
import Link from 'next/link';
import styles from './styles.module.scss';

const Authorization = () => {
  return (
    <section className={styles.container}>
      <div className={styles.frame}>
        <AdminTitle title={'Вхід'} />
        <TextInput title={'Логін'} placeholder={'Введіть логін'} />
        <TextInput title={'Пароль'} placeholder={'Введіть пароль'} />
        <Link href={''} className={styles.text}>
          Забули пароль?
        </Link>
        <AdminButton title={'Увійти'} />
      </div>
    </section>
  );
};

export default Authorization;
