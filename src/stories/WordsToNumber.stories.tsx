import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { WordsToNumber, WordsToNumberProps } from '../modules/WordsToNumber';
import StoryWrapper from './wrapper/StoryWrapper';

export default {
  title: 'Example/WordsToNumber',
  component: WordsToNumber,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<WordsToNumberProps> = (args) => (
  <WordsToNumber {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'سه هزار و دویست و پنجاه'
};

export const AddCommas = Template.bind({});
AddCommas.args = {
  children: 'سه هزار و دویست و پنجاه',
  addCommas: true
};

export const Digits = Template.bind({});
Digits.args = {
  children: 'سه هزار و دویست و پنجاه',
  digits: 'fa'
};

export const Fuzzy = Template.bind({});
Fuzzy.args = {
  children: 'سه هزار و دویشت و پنجاه',
  fuzzy: true
};
