import { TTestimonialFormInput } from "./types";

export const testimonialDefaultValues: TTestimonialFormInput = {
    name: {
      ua: '',
      en: '',
      pl: '',
    },
    review: {
      ua: '',
      en: '',
      pl: '',
    },
    authorImg: [],
    role: '',
    date: new Date().toISOString().split('T')[0],
  };