import type { StoryFn, Meta } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import { Pagination } from './Pagination';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export const Default: StoryFn<typeof Pagination> = () => (
  <Pagination
    count={500}
    onSetItemsPerPage={action('setItemsPerPage')}
    onSetCurrent={action('setCurrent')}
  />
);

export const Divider: StoryFn<typeof Pagination> = () => (
  <Pagination
    divider
    count={500}
    current={50}
    onSetItemsPerPage={action('setItemsPerPage')}
    onSetCurrent={action('setCurrent')}
  />
);
