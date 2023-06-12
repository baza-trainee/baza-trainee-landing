import axios from 'axios';
import authApi from './auth';
import contactsApi from './contacts';
import fileApi from './fileUpload';
import membersApi from './members';
import partnersApi from './partners';
import projectsApi from './projects';
import rolesApi from './roles';
import testimonialsApi from './testimonials';

axios.defaults.baseURL = 'https://baza-trainee-7ain.onrender.com/';

export {
  authApi,
  contactsApi,
  fileApi,
  membersApi,
  partnersApi,
  projectsApi,
  rolesApi,
  testimonialsApi,
};
