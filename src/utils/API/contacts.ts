import { bazaAPI } from './config';

export const contactsApi = {
  async getData() {
    const res = await fetch('https://baza-trainee.tech/api/v1/contacts', {
      cache: 'no-cache',
    });
    return res.ok ? await res.json() : null;
  },

  async update<T>(contacts: T) {
    return await bazaAPI.patch('/contacts', contacts);
  },
};
