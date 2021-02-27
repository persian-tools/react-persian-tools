import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DigitsEnToFa, DigitsProps } from '../../modules/Digits';
import StoryWrapper from '../wrapper/StoryWrapper';

export default {
  title: 'Example/DigitsEnToFa',
  component: DigitsEnToFa,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<DigitsProps> = (args) => <DigitsEnToFa {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '123۴۵۶'
};
