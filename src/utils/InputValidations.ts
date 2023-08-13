export const validateEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
