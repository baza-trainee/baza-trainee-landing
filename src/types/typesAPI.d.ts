import { AxiosResponse } from 'axios';

export interface IErrorResponse {
  message: string;
  status: number;
  statusText?: string;
}

interface CommonResponseBase {
  _id?: string;
  __v?: number;
}

type titleLanguagesTypes = {
  en: string;
  pl: string;
  ua: string;
};

// Request types

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  name: string;
}

export interface IAchievement extends CommonResponseBase {
  projects: number;
  members: number;
  employed: number;
}

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
  title: titleLanguagesTypes;
  subtitle: titleLanguagesTypes;
  imageUrl?: string;
}

export interface IPartner extends CommonResponseBase {
  homeUrl?: string;
  imageUrl: string;
}
/*
export interface IProject extends CommonResponseBase {
  title: titleLanguagesTypes;
  imageUrl: string;
  deployUrl?: string;
  stack?: [{ _id?: string; name: string }];
  isTeamRequired: Boolean;
  creationDate: number;
  launchDate?: number;
  complexity: number;
  teamMembers?: [
    {
      user: { _id?: string; name: string };
      role: { _id?: string; name: string };
    }
  ];
}*/

export interface IProject {
  _id: string;
  title: string;
  imageUrl: string;
  status: string;
  statusVal: 'active' | 'under-development' | 'formation';
  link: string;
  description: string;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: {
      _id: string;
      name: string;
      link: string;
    };
    role: {
      _id: string;
      name: string;
    };
  }>;
}

export interface IRole extends CommonResponseBase {
  name: titleLanguagesTypes;
}

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

export interface IMember extends CommonResponseBase {
  name: titleLanguagesTypes;
  profileUrl?: string;
}

export interface ITestimonial extends CommonResponseBase {
  name: titleLanguagesTypes;
  review: titleLanguagesTypes;
  date: number;
  imageUrl: string;
}

export interface IUser extends CommonResponseBase {
  name: string;
  email: string;
  passwordHash: string;
  token: string;
}

export type id = string | number;
export type byIdRequest = id;
export type updateByIdRequest = [id: id, payload: Object];
export type searchProjectRequest = string;

export type methodType<T> = (payload: T) => Promise<AxiosResponse>;
export type dispatcherType<T> = (payload?: T) => void;
export type responseDataType =
  | any
  | IUser
  | IAchievement
  | IHeroSlider
  | IPartner
  | IProject
  | IRole
  | IStack
  | IMember
  | ITestimonial
  | IErrorResponse
  | Array<
      | IHeroSlider
      | IPartner
      | IProject
      | IRole
      | IStack
      | IMember
      | ITestimonial
    >
  | null;
