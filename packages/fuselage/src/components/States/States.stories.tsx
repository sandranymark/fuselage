import type { Meta } from '@storybook/react-webpack5';
import type { ComponentType } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

import {
  States,
  StatesSubtitle,
  StatesIcon,
  StatesTitle,
  StatesSuggestionList,
  StatesSuggestionListItem,
  StatesSuggestion,
  StatesSuggestionText,
  StatesActions,
  StatesAction,
  StatesLink,
} from '.';

export default {
  title: 'Feedback/States',
  component: States,
  subcomponents: {
    StatesSubtitle: StatesSubtitle as ComponentType<any>,
    StatesIcon: StatesIcon as ComponentType<any>,
    StatesTitle: StatesTitle as ComponentType<any>,
    StatesSuggestionList: StatesSuggestionList as ComponentType<any>,
    StatesSuggestionListItem: StatesSuggestionListItem as ComponentType<any>,
    StatesSuggestion: StatesSuggestion as ComponentType<any>,
    StatesSuggestionText: StatesSuggestionText as ComponentType<any>,
    StatesActions: StatesActions as ComponentType<any>,
    StatesAction: StatesAction as ComponentType<any>,
    StatesLink: StatesLink as ComponentType<any>,
  },
} satisfies Meta<typeof States>;

export const Default = ({ searchTerm = 'search term here' }) => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>
        No Marketplace matches for:
        <strong>"{searchTerm}"</strong>
      </StatesSubtitle>
      <StatesSuggestion>
        <StatesSuggestionText>You can try to:</StatesSuggestionText>
        <StatesSuggestionList>
          <StatesSuggestionListItem>
            Search by category
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more general term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more specific term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Check if the spelling is correct
          </StatesSuggestionListItem>
        </StatesSuggestionList>
      </StatesSuggestion>
    </States>
  </Box>
);

export const ActionButton = () => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>No Marketplace matches for:</StatesSubtitle>
      <StatesSuggestion>
        <StatesSuggestionText>You can try to:</StatesSuggestionText>
        <StatesSuggestionList>
          <StatesSuggestionListItem>
            Search by category
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more general term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Search for a more specific term
          </StatesSuggestionListItem>
          <StatesSuggestionListItem>
            Check if the spelling is correct
          </StatesSuggestionListItem>
        </StatesSuggestionList>
      </StatesSuggestion>
      <StatesActions>
        <StatesAction>Reload</StatesAction>
      </StatesActions>
    </States>
  </Box>
);

export const ActionButtonWithNoSuggestions = () => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>
        No app matches for ”search term here” Try searching in the Marketplace
        instead.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>Reload</StatesAction>
      </StatesActions>
    </States>
  </Box>
);

export const Link = () => (
  <Box>
    <States>
      <StatesIcon name='magnifier' />
      <StatesTitle>No app matches</StatesTitle>
      <StatesSubtitle>
        No app matches for ”search term here” Try searching in the Marketplace
        instead.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>Reload</StatesAction>
      </StatesActions>
      <StatesLink target='_blank' href='https://go.rocket.chat'>
        Link to another page
      </StatesLink>
    </States>
  </Box>
);

export const Variations = () => (
  <Box>
    <States>
      <StatesIcon name='circle-exclamation' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='reload' /> Reload
        </StatesAction>
      </StatesActions>
    </States>

    <States>
      <StatesIcon name='circle-exclamation' variation='danger' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='reload' /> Reload
        </StatesAction>
      </StatesActions>
    </States>
    <States>
      <StatesIcon name='circle-exclamation' variation='primary' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='reload' /> Reload
        </StatesAction>
      </StatesActions>
    </States>

    <States>
      <StatesIcon name='magnifier' variation='success' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='reload' /> Reload
        </StatesAction>
      </StatesActions>
    </States>

    <States>
      <StatesIcon name='magnifier' variation='warning' />
      <StatesTitle>Connection error</StatesTitle>
      <StatesSubtitle>
        Cannot connect to internet or your workspace may be an offline install.{' '}
        <br /> Contact your workspace admin for more information.
      </StatesSubtitle>
      <StatesActions>
        <StatesAction>
          <Icon name='reload' /> Reload
        </StatesAction>
      </StatesActions>
    </States>
  </Box>
);
