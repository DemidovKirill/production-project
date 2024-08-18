import { StoreSchema } from 'app/providers/Store';

export const getUserProfileFormData = (state: StoreSchema) => state?.profile?.formData;
