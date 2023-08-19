export interface PartnerData {
  name: string;
  file: File | null;
  homeUrl: string;
}

export interface PartnerActionProps {
  handleAddPartnerClick: () => void;
  handleEditPartnerClick: (id: string) => void;
}

export interface PartnerItemProps {
  id: string;
  name: string;
  image: string;
  handleEditPartnerClick: (id: string) => void;
  handleDataUpdate: () => void;
}

export interface PartnerDataEdit {
  name: string;
  imageUrl: string;
  homeUrl: string;
}

export interface PartnerEditorProps {
  mode: 'add' | 'edit';
  cancelAction: () => void;
  id?: string;
  partnerData?: PartnerDataEdit;
}

export interface PartnerFormProps {
  formData: PartnerData;
  isFormValid: boolean;
  errors: Errors;
  handleFieldChange: FieldChangeHandler;
  handleSubmit: () => void;
  isNew: boolean;
}

export interface FieldChangeHandler {
  (field: keyof PartnerData, value: string | File | null): void;
}

export interface Errors {
  name?: string;
  file?: string;
  website?: string;
}
