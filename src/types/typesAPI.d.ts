import { AxiosResponse } from 'axios';

import { TPartnerResp } from './partnersTypes';
import { TMemberBioResp, TMemberRoleResp, TProjectResp } from './projectsTypes';

export interface IErrorResponse {
  message: string;
  status: number;
  statusText?: string;
}

interface CommonResponseBase {
  _id?: string;
  __v?: number;
}

export type TTitleLanguagesTypes = {
  en: string;
  pl: string;
  ua: string;
};

type TPagination = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
};

// Request types

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  name: string;
}

// export interface IAchievement extends CommonResponseBase {
//   projects: number;
//   members: number;
//   employed: number;
// }

export interface IUpdateEmployedRequest {
  employed: number;
}

export type TContactsInfo = {
  [key: string]: any;
  contactsDataList?: {
    phone1?: number;
    phone2?: number;
    email?: string;
  };
  socialsMediaList?: {
    linkedin?: string;
    facebook?: string;
    telegram?: string;
  };
};

export interface IHeroSlider extends CommonResponseBase {
  title: TTitleLanguagesTypes;
  subtitle: TTitleLanguagesTypes;
  imageUrl?: string;
}

// export interface IPartner extends CommonResponseBase {
//   homeUrl?: String;
//   imageUrl: String;
//   name: String;
// }
export type IHeroSliderData = {
  results: IHeroSlider[];
  info: {
    totalSlides: number;
    maxSlides: number;
  };
};

// export interface IPartner extends CommonResponseBase {
//   homeUrl?: string;
//   imageUrl: string;
// }

export interface IStack extends CommonResponseBase {
  name: string;
}
export interface IDocuments<T> extends CommonResponseBase {
  report: T;
  statute: T;
  privacyPolicy: {
    en: T;
    pl: T;
    ua: T;
  };
  termsOfUse: {
    en: T;
    pl: T;
    ua: T;
  };
}

// export interface IMember extends CommonResponseBase {
//   name: TTitleLanguagesTypes;
//   profileUrl?: string;
// }

type TTestimonialBase = {
  name: TTitleLanguagesTypes;
  review: TTitleLanguagesTypes;
  date: number;
  role: string;
};

export type TTestimonialResp = TTestimonialBase & {
  _id: string;
  imageUrl: string;
};

export type ITestimonialRequest = TTestimonialBase & {
  file: File;
};

// export interface IUser extends CommonResponseBase {
//   name: string;
//   email: string;
//   passwordHash: string;
//   token: string;
// }

export type id = string | number;
export type searchProjectRequest = string;

export type methodType<T> = (payload: T) => Promise<AxiosResponse>;
export type dispatcherType<T> = (payload?: T) => void;
export type responseDataType =
  | any
  // | IUser
  // | IAchievement
  | IHeroSlider
  // | IPartner
  // | IProject
  // | IRole
  | IStack
  // | IMember
  | TTestimonialResp
  | IErrorResponse
  | Array<
      | IHeroSlider
      // | IPartner
      // | IProject
      // | IRole
      | IStack
      // | IMember
      | TTestimonialResp
    >
  | null;

export type TResponsePartners = {
  results: TPartnerResp[];
  pagination: TPagination;
};

export type TResponseProjects = {
  results: TProjectResp[];
  pagination: TPagination;
};

export type TResponseMembers = {
  results: TMemberBioResp[];
  pagination: TPagination;
};

export type TResponseRoles = {
  results: TMemberRoleResp[];
  pagination: TPagination;
};

export type THeroSliderData = {
  results: IHeroSlider[];
  info: {
    totalSlides: number;
    maxSlides: number;
  };
};

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface IPasswordRequestReset {
  email: string;
}
export interface IPasswordReset {
  userId: string;
  token: string;
  password: string;
}
