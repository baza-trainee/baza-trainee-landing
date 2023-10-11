export type TTestimonialFormInput = {
  name: {
    ua: string;
    en: string;
    pl: string;
  };
  review: {
    ua: string;
    en: string;
    pl: string;
  };
  role: string;
  authorImg: File[];
  date: string;
};

export type DateInputRegisterOprions =
  | { ua: string; en: string; pl: string }
  | { ua: string; en: string; pl: string }
  | string
  | File
  | File[]
  | undefined;
