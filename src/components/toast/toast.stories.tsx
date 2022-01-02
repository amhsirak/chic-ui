import { Meta } from '@storybook/react/types-6-0';
import Toast from './toast';
import { toast } from './toastmanager';
import SearchIcon from '../../icons/Search';

export default {
  title: 'Components/Toast',
  component: Toast
} as Meta;

// display a toast message when the page loads
// you can call toast.destroy('my-id') from anywhere to remove this message manually with code

export const Trying = () => {
  return (
    <button
      onClick={() =>
        toast.open({
          title: 'Toast title',
          message: 'Toast body',
          type: 'secondary',
          duration: 3000
        })
      }
    >
      Show toast
    </button>
  );
};
