import { Story, Meta } from '@storybook/react/types-6-0';
import { theme } from '../../tokens/themes';
import Pagination, { PaginationProps } from './pagination';
export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    bgType: {
      options: Object.keys(theme),
      control: { type: 'radio' }
    },
    pages: {
      control: { type: 'number' }
    },
    startCountInZero: {
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

export const CustomOptions = Template.bind({});

export const HandleChanges = Template.bind({});

Default.args = {
  pages: 10,
  bgType: 'primary',
  activeBg: 'white',
  activeHoverColor: 'black',
  activeColor: 'black',
  whenPreviousPage: (page) =>
    console.log(`Previous page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    console.log(`Next page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    console.log(`Different page hit, currently in page ${page}`)
};

CustomOptions.args = {
  pages: 4,
  activeBg: 'red',
  startCountInZero: true,
  customBg: {
    bgColor: 'grey',
    hover: 'black',
    color: 'yellow'
  },
  activeHoverColor: 'white',
  whenPreviousPage: (page) =>
    console.log(`Previous page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    console.log(`Next page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    console.log(`Different page hit, currently in page ${page}`)
};

HandleChanges.args = {
  ...CustomOptions.args,
  whenPreviousPage: (page) =>
    alert(`whenPreviousPage page hit, currently in page ${page}`),
  whenNextPage: (page) =>
    alert(`whenNextPage page hit, currently in page ${page}`),
  whenPageChange: (page) =>
    alert(`whenPageChange hit, currently in page ${page}`)
};
