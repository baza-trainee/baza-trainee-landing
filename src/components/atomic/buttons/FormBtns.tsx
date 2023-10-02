import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  isResetPass?: boolean;
  isEditModeNoWrap?: boolean;
  disabled?: boolean;
  handleFunc: () => void;
};

export const FormBtns = ({
  isEditMode,
  isResetPass,
  isEditModeNoWrap,
  disabled,
  handleFunc,
}: TBtnsProps) => {
  const okBtnName = isResetPass
    ? 'Підтвердити'
    : isEditMode
    ? 'Зберегти зміни'
    : isEditModeNoWrap
    ? 'Зберегти зміни'
    : 'Додати';

  return (
    <div
      className={`flex gap-7 ${
        isResetPass || isEditModeNoWrap ? 'w-full flex-col' : ''
      }`}
    >
      <AdminPanelButton disabled={disabled} type="submit">
        {okBtnName}
      </AdminPanelButton>

      <AdminPanelButton variant="secondary" onClick={() => handleFunc()}>
        Скасувати
      </AdminPanelButton>
    </div>
  );
};
