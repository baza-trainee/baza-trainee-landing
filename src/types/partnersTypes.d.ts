import { id } from './typesAPI';

export interface PartnerData {
  name: string;
  file: File | null;
  homeUrl: string;
  imageUrl: string;
}

export interface PartnerActionProps {
  handleAddPartnerClick: () => void;
  handleEditPartnerClick: (id: string) => void;
}

export interface PartnerItemProps {
  partner: {
    _id: string;
    name: string;
    imageUrl: string;
  };
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
  id?: id;
  partnerData?: PartnerDataEdit;
  title?: string;
}

export interface PartnerFormProps {
  partnerData: PartnerDataEdit;
  handleSubmit: (formData: any) => void;
}

export interface FieldChangeHandler {
  (field: keyof PartnerData, value: string | File | null): void;
}

export interface Errors {
  name?: string;
  file?: string;
  website?: string;
}
