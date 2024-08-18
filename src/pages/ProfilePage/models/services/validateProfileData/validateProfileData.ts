import { ProfileData, ValidateProfileDataError } from 'pages/ProfilePage';

export const validateProfileData = (profileData?: ProfileData | null): ValidateProfileDataError[] => {
  const errors: ValidateProfileDataError[] = [];

  if (!profileData) {
    return [ValidateProfileDataError.EMPTY_PROFILE_DATA];
  }

  const {
    firstname,
    lastname,
    age,
  } = profileData;

  if (!firstname) {
    errors.push(ValidateProfileDataError.INCORRECT_USER_NAME);
  }

  if (!lastname) {
    errors.push(ValidateProfileDataError.INCORRECT_USER_LASTNAME);
  }

  if (age) {
    if (!Number.isInteger(age) && age > 0) {
      errors.push(ValidateProfileDataError.INCORRECT_AGE);
    }
  } else {
    errors.push(ValidateProfileDataError.INCORRECT_AGE);
  }

  return errors;
};
