import { addons } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { LightDarkToggle, LightDarkToggleProps } from './LightDarkToggle';

const channel = addons.getChannel();

export default {
  title: 'LightDarkToggle',
  component: LightDarkToggle,
} as Meta;

const Template: StoryFn<LightDarkToggleProps> = (args) => (
  <LightDarkToggle
    {...args}
    isLight={!useDarkMode()}
    onToggle={(isLight) => channel.emit('DARK_MODE', !isLight)}
  />
);

export const Default = Template.bind({});

export const FullScreen = Template.bind({});
FullScreen.args = { style: { fontSize: '24vw' } };
