import { addons } from '@storybook/addons';
import { Meta, StoryFn } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { GoogleFontsLightDarkToggle } from './GoogleFontsLightDarkToggle';
import { LightDarkToggleProps } from './LightDarkToggle';

const channel = addons.getChannel();

export default {
  title: 'GoogleFontsLightDarkToggle',
  component: GoogleFontsLightDarkToggle,
} as Meta;

const Template: StoryFn<LightDarkToggleProps> = (args) => (
  <GoogleFontsLightDarkToggle
    {...args}
    isLight={!useDarkMode()}
    onToggle={(isLight) => channel.emit('DARK_MODE', !isLight)}
  />
);

export const Default = Template.bind({});

export const FullScreen = Template.bind({});
FullScreen.args = { style: { fontSize: '24vw' } };
