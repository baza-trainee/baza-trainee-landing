import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  isResetPass?: boolean;
  isEditModeNoWrap?: boolean;
  disabled?: boolean;
  cancelAction: () => void;
};

export const FormBtns = ({
  isEditMode,
  isResetPass,
  isEditModeNoWrap,
  disabled,
  cancelAction,
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

      <AdminPanelButton variant="secondary" onClick={() => cancelAction()}>
        Скасувати
      </AdminPanelButton>
    </div>
  );
};
