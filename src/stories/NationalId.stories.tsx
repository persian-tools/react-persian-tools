import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { NationalId, NationalIdProps } from '../modules/NationalId';
import StoryWrapper from './wrapper/StoryWrapper';

export default {
  title: 'Example/NationalId',
  component: NationalId,
  argTypes: {
    children: { defaultValue: 'Button' }
  },
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<NationalIdProps> = (args) => <NationalId {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '0499370899'
};
