import Authorization from '@/components/AdminPage/Authorization';
import {
  AdminPanelButton,
  AdminPanelMenuItem,
  InputField,
  PasswordInput,
} from '@/components/atomic';
import { LogOutIcon } from '@/components/common/icons';

const AdminMainPage = () => {
  return (
    <section className="w-full">
      {/* <Authorization /> */}

      <div className="m-16">
        {/* <PasswordInput placeholder="Pass" enableTranslator /> */}
        {/* <AdminPanelButton
          variant="secondary"
          disabled
          >
          Текст
        </AdminPanelButton> */}
        {/* <AdminPanelMenuItem
        icon={<LogOutIcon />}
        /> */}
      </div>
    </section>
  );
};

export default AdminMainPage;
