// src/api/axios/interceptors.ts
// src/api/axios/interceptors.ts
import type { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { STORAGE, storage } from '../utils/storage';
import axios from 'axios';
export const setupInterceptors = (instance: AxiosInstance) => {
  // Request Interceptor
  instance.interceptors.request.use(
    config => {
      if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
      }

      // ✅ Lấy token thật đã được lưu sau login
      const token = storage.getLocalStorage(STORAGE.TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => Promise.reject(error)
  );
  // Response Interceptor
  instance.interceptors.response.use(
    response => {
      if (response.config.responseType === 'blob') {
        return response;
      }

      const { errorCode, errorMessage, isError, object, StatusCode } =
        response.data;

      if (isError && errorCode !== '200') {
        // ✅ Nếu lỗi 401 → xử lý logout
        if (StatusCode === 401) {
          toast.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
          storage.deleteLocalStorage(STORAGE?.TOKEN);
          window.location.href = '/'; // Không dùng navigate ở đây
        } else {
          if (
            object !== 'Reprentative Existed' &&
            object !== 'Representative already added to meeting'
          )
            toast.error(`Lỗi ${object}`);
          return;
        }

        return Promise.reject({ errorCode, errorMessage });
      }

      return response.data;
    },

    error => {
      toast.error(error?.message || 'Lỗi không xác định từ server');
      return Promise.reject(error);
    }
  );
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

setupInterceptors(instance);

export default instance;
