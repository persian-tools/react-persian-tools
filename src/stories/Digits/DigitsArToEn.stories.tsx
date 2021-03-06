import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DigitsArToEn, DigitsProps } from '../../modules/Digits';
import StoryWrapper from '../wrapper/StoryWrapper';

export default {
  title: 'Example/DigitsArToEn',
  component: DigitsArToEn,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<DigitsProps> = (args) => <DigitsArToEn {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '٠١٢٣٤٥٦٧٨٩'
};
