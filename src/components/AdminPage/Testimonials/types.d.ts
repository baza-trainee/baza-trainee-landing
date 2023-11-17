export type TTestimonialFormInput = {
  nameUa: string;
  nameEn: string;
  namePl: string;
  reviewUa: string;
  reviewEn: string;
  reviewPl: string;
  role: string;
  authorImg: File[];
  date: string;
};

export type DateInputRegisterOptions =
  // | { ua: string; en: string; pl: string }
  // | { ua: string; en: string; pl: string }
  string | File | File[] | undefined;
