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

// export const validatePassword = (password: string) => {
//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
//   return passwordPattern.test(password);
// };

export const validatePasswordLength = (password: string) => {
  const passwordPattern = /^.{8,}$/;
  return passwordPattern.test(password);
};
export const validatePasswordBigLetter = (password: string) => {
  const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
  return passwordPattern.test(password);
};
export const validatePasswordSmallLetter = (password: string) => {
  const passwordPattern = /^(?=.*[a-z]).{8,}$/;
  return passwordPattern.test(password);
};
export const validatePasswordNumber = (password: string) => {
  const passwordPattern = /^(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
};
export const validatePasswordSymbol = (password: string) => {
  const passwordPattern = /^(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
  return passwordPattern.test(password);
};