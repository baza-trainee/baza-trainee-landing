export interface IErrorResponse {
  message: String;
  responseMessage: String;
  status: Number;
}

// Request types

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  name: string;
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
  title: {
    en: String;
    pl: String;
    ua: String;
  };
  subTitle: {
    en: String;
    pl: String;
    ua: String;
  };
  imageUrl?: String;
  file?: File;
}

export interface IPartner {
  homeUrl?: String;
  imageUrl: String;
}

export interface IProject {
  title: {
    en: String;
    pl: String;
    ua: String;
  };
  imageUrl: String;
  deployUrl?: String;
  stack?: [{ _id: String; name: String }];
  isTeamRequired: Boolean;
  creationDate: Number;
  launchDate?: Number;
  complexity: Number;
  teamMembers?: [
    { user: { _id: String; name: String }; role: { _id: String; name: String } }
  ];
}

export interface IRole {
  en: String;
  pl: String;
  ua: String;
  name: String;
}

export interface IStack {
  name: String;
}

export interface IMember {
  name: {
    en: String;
    pl: String;
    ua: String;
  };
  profileUrl?: String;
}

export interface ITestimonial {
  name: {
    en: String;
    pl: String;
    ua: String;
  };
  review: {
    en: String;
    pl: String;
    ua: String;
  };
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

export type methodType = Function;
export type dispatcherType = (payload?: requestPayloadType) => void;
export type responseDataType<T> = T | IErrorResponse | null;
export type requestPayloadType =
  | ILoginRequest
  | IRegisterRequest
  | IUpdateEmployedRequest
  | IUpdateContactsRequest
  | IHeroSlider
  | IPartner
  | IProject
  | IRole
  | IStack
  | IMember
  | ITestimonial
  | byIdRequest
  | updateByIdRequest
  | searchProjectRequest
  | null;
