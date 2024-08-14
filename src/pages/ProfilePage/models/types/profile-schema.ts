import { ProfileData } from './profile-data';
import { ValidateProfileDataError } from './profile-data-errors';

export interface ProfileSchema {
  profileData?: ProfileData | null;
  formData?: ProfileData | null;
  isLoading: boolean;
  error?: string | null;
  readonly: boolean;
  validateErrors?: ValidateProfileDataError[]
}
