import { ProfileData } from 'entities/Profile/models/types/profile-data';

export interface ProfileSchema {
  profileData?: ProfileData | null;
  isLoading: boolean;
  error?: string | null;
  readonly: boolean;
}
