export interface PartnerData {
  name: string;
  file: File | null;
  homeUrl: string;
}

export interface PartnerActionProps {
  handleAddPartnerClick: () => void;
  handleEditPartnerClick: (id: string) => void;
}

export interface PartnerAddProps {
  cancelAdd: () => void;
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
  errors: Errors;
  handleFieldChange: FieldChangeHandler;
  handleSubmit: () => void;
}

export interface FieldChangeHandler {
  (field: keyof PartnerData, value: string | File | null): void;
}

export interface Errors {
  name?: string;
  file?: string;
  website?: string;
}
