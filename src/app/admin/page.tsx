import Authorization from '@/components/AdminPage/Authorization';
import { InputField,  PasswordInput } from '@/components/atomic';

const AdminMainPage = () => {
  return (
    <section className='w-full'>
      {/* <Authorization /> */}

    
      <div className="m-16">
        <PasswordInput placeholder="Pass" enableTranslator />
      </div>
    </section>
  );
};

export default AdminMainPage;
