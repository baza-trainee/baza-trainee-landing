export type TPasswordDateSettings = {
  oldPassword: string;
  newPassword: string;
  duplicationPassword: string;
};

export type TPasswordDateReset = {
  password: string;
  duplicationPassword: string;
};

export type TPasswordDateRequest = {
  email: string;
};

export type DefaultDataProps =
  | 'settingsPassword'
  | 'resetPassword'
  | 'requestPassword';
