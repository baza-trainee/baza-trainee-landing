export interface PartnerData {
  name: string;
  file: File | null;
  homeUrl: string;
  [key: string]: string | File | null;
}

export interface PartnerActionProps {
  handleAddPartnerClick: () => void;
  handleEditPartnerClick: (id: string) => void;
}

export interface PartnerAddProps {
  cancelAdd: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PartnerEditProps {
  id: string;
  partnerData: PartnerData;
  cancelEdit: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PartnerItemProps {
  id: string;
  name: string;
  image: string;
  handleEditPartnerClick: (id: string) => void;
  handleDataUpdate: () => void;
}

export interface PartnerFormProps {
  formData: PartnerData;
  isFormValid: boolean;
  handleFieldChange: FieldChangeHandler;
  handleSubmit: () => void;
}

export interface FieldChangeHandler {
  (field: keyof PartnerData, value: string | File | null): void;
}