import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  disabled?: boolean;
  handleFunc: () => void;
};

export const FormBtns = ({ isEditMode, disabled, handleFunc }: TBtnsProps) => {
  const okBtnName = isEditMode ? 'Зберегти зміни' : 'Додати';

  return (
    <div className="mt-14 flex gap-7">
      <AdminPanelButton disabled={disabled} type="submit">
        {okBtnName}
      </AdminPanelButton>

      <AdminPanelButton variant="secondary" onClick={() => handleFunc()}>
        Скасувати
      </AdminPanelButton>
    </div>
  );
};
