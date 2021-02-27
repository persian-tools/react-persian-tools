import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RemoveCommas, RemoveCommasProps } from '../../modules/Commas';
import StoryWrapper from '../wrapper/StoryWrapper';

export default {
  title: 'Example/RemoveCommas',
  component: RemoveCommas,
  decorators: [
    (Story): JSX.Element => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    )
  ]
} as Meta;

const Template: Story<RemoveCommasProps> = (args) => <RemoveCommas {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '30,000,000'
};
