import { toast } from 'react-toast-notification'

export const success = message => {
  if (message) {
    toast(message, {
      status: 'Thanks!',
      type: 'success'
    })
  }
};

export const error = message => {
  if (message) {
    toast(message, {
      status: 'Oops!',
      type: 'error'
    })
  }
};

export default {
  success,
  error
}