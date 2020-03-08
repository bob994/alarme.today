import { toast } from 'react-toastify';

export const successNotification = (message: string): void => {
  toast(message, {
    className: 'toast-success',
  });
};

export const errorNotification = (message: string): void => {
  toast(message, {
    className: 'toast-error',
  });
};
