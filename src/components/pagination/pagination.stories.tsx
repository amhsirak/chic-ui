import { Story, Meta } from '@storybook/react/types-6-0';
import { theme } from '../../config/themes';
import Pagination, { PaginationProps } from './pagination';
export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    bgType: {
      options: Object.keys(theme),
      control: { type: 'radio' },
    },
    pages: {
      control: { type: 'number' },
    },
    startCountInZero: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

export const CustomOptions = Template.bind({});

export const HandleChanges = Template.bind({});

Default.args = {
  pages: 4,
  bgType: 'success',
  activeBg: 'blue',
  activeHoverColor: 'white',
  activeColor: 'white',
  whenPreviousPage: (page) =>
    console.log(`Previous page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    console.log(`Next page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    console.log(`Different page hit, currently in page ${page}`),
};

CustomOptions.args = {
  pages: 4,
  bgType: 'warning',
  activeBg: 'red',
  startCountInZero: true,
  customBg: {
    regular: 'pink',
    hover: 'black',
    color: 'red',
  },
  activeHoverColor: 'white',
  whenPreviousPage: (page) =>
    console.log(`Previous page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    console.log(`Next page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    console.log(`Different page hit, currently in page ${page}`),
};

HandleChanges.args = {
  ...CustomOptions.args,
  whenPreviousPage: (page) =>
    alert(`whenPreviousPage page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    alert(`whenNextPage page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    alert(`whenPageChange hit, currently in page ${page}`),
};
