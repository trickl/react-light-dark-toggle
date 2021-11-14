import addons from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import { GoogldFontsListDarkToggleProps } from './GoogleFontsLightDarkToggleProps';
import { LightDarkToggle, LightDarkToggleProps } from './LightDarkToggle';

const channel = addons.getChannel();

export default {
  title: 'LightDarkToggle',
  component: LightDarkToggle,
} as Meta;

const Template: Story<LightDarkToggleProps> = (args) => (
  <LightDarkToggle
    {...args}
    isLight={!useDarkMode()}
    onToggle={(isLight) => channel.emit('DARK_MODE', !isLight)}
  />
);

export const Default = Template.bind({});

export const FullScreen = Template.bind({});
FullScreen.args = { style: { fontSize: '24vw' } };

export const GoogleFonts = Template.bind({});
GoogleFonts.args = GoogldFontsListDarkToggleProps;
