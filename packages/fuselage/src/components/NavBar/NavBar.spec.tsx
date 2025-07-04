import { composeStories } from '@storybook/react-webpack5';
import { axe } from 'jest-axe';
import { SSRProvider } from 'react-aria';

import { render } from '../../testing';

import * as stories from './NavBar.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[NavBar Component]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />, {
        wrapper: ({ children }) => <SSRProvider>{children}</SSRProvider>,
      });
      expect(tree.baseElement).toMatchSnapshot();
    },
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    },
  );
});
