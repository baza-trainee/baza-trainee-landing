export interface PartnerData {
  name: string;
  homeUrl: string;
  file: string | null;
}

export interface PartnerDataEdit {
  name: string;
  imageUrl: string;
  homeUrl: string;
}

export interface PartnerFormProps {
  partnerId?: string;
  partnerData?: PartnerDataEdit;
  editorType?: string;
  handleSubmit?: (formData: any) => void;
}

export interface FieldChangeHandler {
  (field: keyof PartnerData, value: string | File | null): void;
}

export interface Errors {
  name?: string;
  file?: string;
  website?: string;
}

///////

type TPartnerBase = {
  homeUrl: string;
  name: string;
};

export type TPartnerFormInputs = TPartnerBase & {
  partnerImg: File[];
};

export type TPartnerReq = TPartnerBase & {
  file: File;
};

export type TPartnerResp = TPartnerBase & {
  _id: string;
  imageUrl: string;
};

export interface PartnerItemProps {
  partner: TPartnerResp;
  handleDelete: () => void;
}
