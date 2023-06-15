import axios from 'axios';
import achievementsApi from './achievements';
import authApi from './auth';
import contactsApi from './contacts';
import fileApi from './fileUpload';
import heroSliderApi from './heroSlider';
import membersApi from './members';
import partnersApi from './partners';
import projectsApi from './projects';
import rolesApi from './roles';
import stacksApi from './stacks';
import testimonialsApi from './testimonials';

axios.defaults.baseURL = 'https://baza-trainee-7ain.onrender.com/';

export {
  achievementsApi,
  authApi,
  contactsApi,
  fileApi,
  heroSliderApi,
  membersApi,
  partnersApi,
  projectsApi,
  rolesApi,
  stacksApi,
  testimonialsApi,
};
