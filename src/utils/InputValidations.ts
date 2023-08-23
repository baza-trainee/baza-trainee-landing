export const validateEmail = (email: string) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: number) => {
  const value = phone.toString();
  const phonePattern = /^380\d{9}$/;
  return phonePattern.test(value);
};

export const validateUrl = (url: string) => {
  const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
};
