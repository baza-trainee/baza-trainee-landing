import Authorization from '@/components/AdminPage/Authorization';
import { InputField,  PasswordInput } from '@/components/atomic';

const AdminMainPage = () => {
  return (
    <section className='w-full'>
      {/* <Authorization /> */}

    
      <div className="m-12">
        <PasswordInput placeholder="Pass" />
      </div>
    </section>
  );
};

export default AdminMainPage;
