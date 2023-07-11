import { AlertWindow } from '../../components/atomic/AlertWindow';

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
        <AlertWindow />
      </div>
    </section>
  );
};

export default AdminMainPage;
