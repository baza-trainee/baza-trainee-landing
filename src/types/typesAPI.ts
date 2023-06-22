export interface IAuthenticatedRequest extends Request {
  userId?: string;
}

export interface IUser {
  _id: string | number;
  name: string;
  email: string;
  passwordHash: string;
}

export interface ITestimonial {
  name: string;
  review: string;
  date: number;
  imageUrl: string;
}

export interface ITeamMember {
  name: string;
  profileUrl?: string;
}

export interface ITeamMemberRole {
  name: string;
}

export interface IProjectTeamMember {
  userId: {
    _id: string | number;
    name?: string;
  };
  roleId: {
    _id: string | number;
    name?: string;
  };
}

export interface IStack {
  stackId: any;
  _id: string | number;
  name: string;
}

export interface IProject {
  title: string;
  imageUrl: string;
  deployUrl?: string;
  stack: Array<{
    stackId: Partial<IStack>;
  }>;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Partial<IProjectTeamMember>[];
  _id: string | number;
}

export interface IPartner {
  homeUrl?: string;
  imageUrl: string;
}

export interface IContacts {
  contacts: {
    contactsDataList: {
      phone1: number;
      phone2: number;
      email: string;
    };
    socialsMediaList: {
      linkedin: string;
      facebook: string;
    };
  };
}

export interface IAchievements {
  employed: {
    type: number;
  };
}

export interface IProjectResponse {
  title: {
    en: string;
    pl: string;
    ua: string;
  };
  _id: string;
  imageUrl: string;
  deployUrl?: string;
  stack: Array<{
    _id: string;
    name: string;
  }>;
  isTeamRequired: boolean;
  creationDate: number;
  launchDate: number;
  complexity: number;
  teamMembers: Array<{
    user: {
      name: string;
      _id: string;
    };
    role: {
      name: string;
      _id: string;
    };
  }>;
}

export interface IHeroSlider {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface IError {
  code: string;
  config: Array<any>;
  message: string;
  name: string;
  request: XMLHttpRequest;
  response: Object;
}
