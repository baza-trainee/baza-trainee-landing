import axios from 'axios';
import contactsApi from './contacts';
import fileApi from './fileUpload';
import membersApi from './members';
import partnersApi from './partners';
import projectsApi from './projects';
import rolesApi from './roles';
import testimonialsApi from './testimonials';
import userApi from './user';

axios.defaults.baseURL = 'https://baza-trainee-7ain.onrender.com/';

export {
  userApi,
  contactsApi,
  partnersApi,
  projectsApi,
  rolesApi,
  membersApi,
  testimonialsApi,
  fileApi,
};
