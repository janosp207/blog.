
type NewUserData = {
  username: string;
  usertag: string;
  password: string;
  repeatPassword: string;
};

const validateRegistration = (fieldName: string, value: string, newUserData: NewUserData): boolean => {
  if (fieldName === 'username' || fieldName === 'usertag') {
    return value.length >= 3;
  }

  if (fieldName === 'password') {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return passwordRegex.test(value);
  }

  if (fieldName === 'repeatPassword') {
    return value !== '' && value === newUserData.password;
  }

  return false;
};

export default validateRegistration;