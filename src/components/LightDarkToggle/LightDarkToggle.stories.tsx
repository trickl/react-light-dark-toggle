import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import addons from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

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

export const Standard = Template.bind({});

export const Large = Template.bind({});
Large.args = { style: { fontSize: '16px' } };

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  moonIconComponent: () => <DarkModeIcon sx={{ color: 'lightgrey' }} />,
  sunIconComponent: LightModeIcon,
};
