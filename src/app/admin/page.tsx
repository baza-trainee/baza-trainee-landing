import { Documents } from '@/components/AdminPage/Documents';

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
        <Documents />
      </div>
    </section>
  );
};

export default AdminMainPage;
