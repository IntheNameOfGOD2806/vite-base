// Định nghĩa key lưu trữ chuẩn
export const STORAGE = {
  TOKEN: 'token',
  USER_INFO: 'user-info',
  REMEMBER_LOGIN: 'remember-login',
  KEY_MENU_ACTIVE: 'key-active',
  TABS_PAGE_ACTIVE: 'tabs-page-active',
  THEME: 'theme',
  ERROR_EXTENSION: 'error-extension',
} as const;

// Type của các key
export type StorageKey = (typeof STORAGE)[keyof typeof STORAGE];

// --------- LocalStorage -----------

export const getLocalStorage = <T = unknown>(key: StorageKey): T | null => {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return data as unknown as T;
  }
};

export const setLocalStorage = (key: StorageKey, value: unknown): void => {
  const stringify = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, stringify);
};

export const deleteLocalStorage = (key: StorageKey): void => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};

// --------- SessionStorage -----------

export const getSessionStorage = <T = unknown>(key: StorageKey): T | null => {
  if (typeof window === 'undefined') return null;
  const data = sessionStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return data as unknown as T;
  }
};

export const setSessionStorage = (key: StorageKey, value: unknown): void => {
  const stringify = typeof value === 'string' ? value : JSON.stringify(value);
  sessionStorage.setItem(key, stringify);
};

export const deleteSessionStorage = (key: StorageKey): void => {
  sessionStorage.removeItem(key);
};

export const clearSessionStorage = (): void => {
  sessionStorage.clear();
};
