import { TTestimonialFormInput } from './types';

export const testimonialDefaultValues: TTestimonialFormInput = {
  nameUa: '',
  nameEn: '',
  namePl: '',
  reviewUa: '',
  reviewEn: '',
  reviewPl: '',
  authorImg: [],
  role: '',
  date: new Date().toISOString().split('T')[0],
};
