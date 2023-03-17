import { toast, ToastOptions } from 'react-toastify';
import s from '../pages/Home/Home.module.scss'


export const showToastSuccess = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    ...options,
    className: s.home__toast_modal,
    bodyClassName: s.bgCheck,
  });
};

export const showToastError = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    ...options,
    className: s.home__toast_modal,
    bodyClassName: s.bgCheck,
  });
};

export const showToastReminder = (message: string, options?: ToastOptions) => {
  toast.info(message, {
    ...options,
    className: s.home__toast_modal
  });
};