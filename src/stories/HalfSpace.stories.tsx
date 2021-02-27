import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { HalfSpace, HalfSpaceProps } from '../modules/HalfSpace';
import StoryWrapper from './wrapper/StoryWrapper';

export default {
  title: 'Example/HalfSpace',
  component: HalfSpace,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<HalfSpaceProps> = (args) => <HalfSpace {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'نمی ‌خواهی درخت ها را ببینیم؟'
};
