import { AdminPanelButton } from '@/components/atomic';

type TBtnsProps = {
  isEditMode?: boolean;
  verticalBtns?: boolean;
  okBtnName?: string;
  cancelBtnName?: string;
  disabled?: boolean;
  cancelAction: () => void;
};

export const FormBtns = ({
  isEditMode,
  verticalBtns,
  okBtnName,
  cancelBtnName = 'Скасувати',
  disabled,
  cancelAction,
}: TBtnsProps) => {
  if (!okBtnName) {
    okBtnName = isEditMode ? 'Зберегти зміни' : 'Додати';
  }

  return (
    <div className={`flex gap-7 ${verticalBtns ? 'flex-col' : ''}`}>
      <AdminPanelButton disabled={disabled} type="submit">
        {okBtnName}
      </AdminPanelButton>

      <AdminPanelButton variant="secondary" onClick={() => cancelAction()}>
        {cancelBtnName}
      </AdminPanelButton>
    </div>
  );
};
