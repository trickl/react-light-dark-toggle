import styled from '@emotion/styled';
import { CSSProperties } from '@mui/styled-engine';
import cn from 'classnames';
import { FunctionComponent, HTMLProps, useCallback } from 'react';

import MoonIconSrc from '../../assets/moon-svgrepo-com.svg';
import SunIconSrc from '../../assets/sun-svgrepo-com.svg';
import { LightDarkButton } from './LightDarkButton';

const PREFIX = 'LightDarkToggle';

const classes = {
  sun: `${PREFIX}-sun`,
  moon: `${PREFIX}-moon`,
  showSun: `${PREFIX}-show-sun`,
  hideSun: `${PREFIX}-hide-sun`,
  showMoon: `${PREFIX}-show-moon`,
  hideMoon: `${PREFIX}-hide-moon`,
};

const DefaultMoonIcon = () => <img src={MoonIconSrc} alt="dark" />;
const DefaultSunIcon = () => <img src={SunIconSrc} alt="light" />;

const iconClasses: CSSProperties = {
  width: '1.5em',
  height: '1.5em',
  transitionProperty: 'transform background',
  transitionDuration: '400ms',
};

const MovableSunIconContainer = styled.div(() => ({
  [`&.${classes.sun}`]: {
    ...iconClasses,
  },

  [`&.${classes.showSun}`]: {
    transform: 'translateY(0)',
  },

  [`&.${classes.hideSun}`]: {
    transform: 'translateY(4em)',
  },
}));

const MovableMoonIconContainer = styled.div(() => ({
  [`&.${classes.moon}`]: {
    ...iconClasses,
  },
  [`&.${classes.showMoon}`]: {
    transform: 'translateY(0)',
  },

  [`&.${classes.hideMoon}`]: {
    transform: 'translateY(-4em)',
  },
}));

export interface LightDarkToggleProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'as'> {
  isLight: boolean;
  sunIconComponent?: FunctionComponent<Record<string, never>>;
  moonIconComponent?: FunctionComponent<Record<string, never>>;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  borderWidth?: string;
  onToggle?: (isLight: boolean) => void;
}

export const LightDarkToggle: FunctionComponent<LightDarkToggleProps> = ({
  className,
  isLight,
  sunIconComponent: SunIcon = DefaultSunIcon,
  moonIconComponent: MoonIcon = DefaultMoonIcon,
  onToggle,
  type,
  lightBackgroundColor = 'aliceblue',
  darkBackgroundColor = 'dimgrey',
  lightBorderColor = 'white',
  darkBorderColor = 'white',
  borderWidth = '2px',
  ...otherProps
}) => {
  const handleClick = useCallback(
    () => onToggle?.(!isLight),
    [isLight, onToggle]
  );
  return (
    <LightDarkButton
      isLight={isLight}
      lightBackgroundColor={lightBackgroundColor}
      darkBackgroundColor={darkBackgroundColor}
      lightBorderColor={lightBorderColor}
      darkBorderColor={darkBorderColor}
      borderWidth={borderWidth}
      onClick={handleClick}
      type="button"
      {...otherProps}
    >
      <MovableSunIconContainer
        className={cn(classes.sun, isLight ? classes.showSun : classes.hideSun)}
      >
        <SunIcon />
      </MovableSunIconContainer>
      <MovableMoonIconContainer
        className={cn(
          classes.moon,
          !isLight ? classes.showMoon : classes.hideMoon
        )}
      >
        <MoonIcon />
      </MovableMoonIconContainer>
    </LightDarkButton>
  );
};
