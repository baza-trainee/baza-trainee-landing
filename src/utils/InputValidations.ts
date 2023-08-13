export const validateEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone: string) => {
  const phonePattern = /^380\d{7}$/;
  return phonePattern.test(phone);
};

export const validateUrl = (url: string) => {
  const urlPattern = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
};
