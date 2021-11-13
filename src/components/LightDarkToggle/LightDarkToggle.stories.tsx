import addons from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

import MoonIconSrc from '../../assets/inside-circle.svg';
import SunIconSrc from '../../assets/outside-rays.svg';
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
GoogleFonts.args = {
  moonIconComponent: () => <img src={MoonIconSrc} alt="dark" />,
  sunIconComponent: () => <img src={SunIconSrc} alt="light" />,
  showSunTransform: 'rotate(0)',
  hideSunTransform: 'rotate(180deg)',
  showMoonTransform: 'translateX(-0.25em)',
  hideMoonTransform: 'translateX(0)',
  showSunFilter: 'saturate(0) invert(0)',
  hideSunFilter: 'saturate(0) invert(1)',
  showMoonFilter: 'saturate(0) invert(1)',
  hideMoonFilter: 'saturate(0) invert(0)',
  lightBackgroundColor: 'transparent',
  darkBackgroundColor: 'transparent',
  lightBorderColor: 'white',
  darkBorderColor: 'white',
  style: {
    borderWidth: '0',
    width: '2em',
  },
};
