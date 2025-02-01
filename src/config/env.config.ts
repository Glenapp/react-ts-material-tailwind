import { trimEndSlash } from '../utils/text.util';

const isDevelopment = import.meta.env.VITE_NODE_ENV !== 'production';

export const environment = {
  IS_DEVELOPMENT: isDevelopment,
  API_BASE_URL: trimEndSlash(import.meta.env.VITE_API_BASE_URL || ''),
};
