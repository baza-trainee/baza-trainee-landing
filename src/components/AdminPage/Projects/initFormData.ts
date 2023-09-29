import { TProject } from "@/types";
import { TFormInput } from "./types";

export const defaultValues: TFormInput = {
  nameUk: '',
  nameEn: '',
  namePl: '',
  projectImg: [],
  deployUrl: '',
  isTeamRequired: false,
  creationDate: new Date().toISOString().split('T')[0],
  launchDate: '',
  complexity: 1,
};

export const emptyLngs = { ua: '', en: '', pl: '' };

export const initProjectData: TProject = {
  _id: '',
  title: emptyLngs,
  imageUrl: '',
  deployUrl: '',
  isTeamRequired: false,
  creationDate: 0,
  launchDate: 0,
  complexity: 1,
  teamMembers: [],
};
