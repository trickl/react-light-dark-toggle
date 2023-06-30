import { FunctionComponent } from 'react';

import MoonIconSrc from '../../assets/inside-circle.svg';
import SunIconSrc from '../../assets/outside-rays.svg';
import { LightDarkToggle, LightDarkToggleProps } from './LightDarkToggle';

export const googleFontsLightDarkToggleProps: LightDarkToggleProps = {
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

export const GoogleFontsLightDarkToggle: FunctionComponent<
  LightDarkToggleProps
> = ({ style, ...otherProps }: LightDarkToggleProps) => (
  <LightDarkToggle
    {...googleFontsLightDarkToggleProps}
    style={{ ...googleFontsLightDarkToggleProps.style, ...style }}
    {...otherProps}
  />
);
