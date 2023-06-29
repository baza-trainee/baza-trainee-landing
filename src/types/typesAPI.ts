import { AxiosResponse } from 'axios';

export interface IErrorResponse {
  message: String;
  status: Number;
  statusText?: String;
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

export interface IAchievement {
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

export interface IHeroSlider {
  title: titleLanguagesTypes;
  subtitle: titleLanguagesTypes;
  imageUrl?: String;
}

export interface IPartner {
  homeUrl?: String;
  imageUrl: String;
}

export interface IProject {
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

export interface IRole {
  name: titleLanguagesTypes;
}

export interface IStack {
  name: String;
}

export interface IMember {
  name: titleLanguagesTypes;
  profileUrl?: String;
}

export interface ITestimonial {
  name: titleLanguagesTypes;
  review: titleLanguagesTypes;
  date: Number;
  imageUrl: String;
}

export interface IUser {
  name: String;
  email: String;
  passwordHash: String;
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
