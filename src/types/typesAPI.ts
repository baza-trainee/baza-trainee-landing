import { AxiosResponse } from 'axios';

export interface IErrorResponse {
  message: String;
  status: Number;
  statusText?: String;
}

interface CommonResponseBase {
  _id?: String;
  __v?: Number;
}

type titleLanguagesTypes = {
  en: String;
  pl: String;
  ua: String;
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
  projects: Number;
  members: Number;
  employed: Number;
}

export interface IUpdateEmployedRequest {
  employed: Number;
}

export interface IUpdateContactsRequest {
  contacts: {
    contactsDataList: {
      phone1: String | Number;
      phone2: String | Number;
      email: String;
    };
    socialsMediaList: {
      linkedin: String;
      facebook: String;
    };
  };
}

export interface IHeroSlider extends CommonResponseBase {
  title: titleLanguagesTypes;
  subtitle: titleLanguagesTypes;
  imageUrl?: String;
}

export interface IPartner extends CommonResponseBase {
  homeUrl?: String;
  imageUrl: String;
}

export interface IProject extends CommonResponseBase {
  title: titleLanguagesTypes;
  imageUrl: String;
  deployUrl?: String;
  stack?: [{ _id?: String; name: String }];
  isTeamRequired: Boolean;
  creationDate: Number;
  launchDate?: Number;
  complexity: Number;
  teamMembers?: [
    {
      user: { _id?: String; name: String };
      role: { _id?: String; name: String };
    }
  ];
}

export interface IRole extends CommonResponseBase {
  name: titleLanguagesTypes;
}

export interface IStack extends CommonResponseBase {
  name: String;
}

export interface IMember extends CommonResponseBase {
  name: titleLanguagesTypes;
  profileUrl?: String;
}

export interface ITestimonial extends CommonResponseBase {
  name: titleLanguagesTypes;
  review: titleLanguagesTypes;
  date: Number;
  imageUrl: String;
}

export interface IUser extends CommonResponseBase {
  name: String;
  email: String;
  passwordHash: String;
  token: String;
}

export type id = String | Number;
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
