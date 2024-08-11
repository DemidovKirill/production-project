import { ProfileData } from './profile-data';

export interface ProfileSchema {
  profileData?: ProfileData | null;
  isLoading: boolean;
  error?: string | null;
  readonly: boolean;
}
