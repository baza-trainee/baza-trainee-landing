


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
