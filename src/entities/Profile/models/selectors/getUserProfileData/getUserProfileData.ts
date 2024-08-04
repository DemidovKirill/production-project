import { StoreSchema } from 'app/providers/Store';

export const getUserProfileData = (state: StoreSchema) => state?.profile?.profileData;
