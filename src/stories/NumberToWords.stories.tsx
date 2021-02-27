import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { NumberToWords, NumberToWordsProps } from '../modules/NumberToWords';
import StoryWrapper from './wrapper/StoryWrapper';

export default {
  title: 'Example/NumberToWords',
  component: NumberToWords,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<NumberToWordsProps> = (args) => (
  <NumberToWords {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '500,443'
};

export const Ordinal = Template.bind({});
Ordinal.args = {
  children: '500,443',
  ordinal: true
};
