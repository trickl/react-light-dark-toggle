import styled from '@emotion/styled';
import cn from 'classnames';
import React, { FunctionComponent, HTMLProps, useCallback } from 'react';

import MoonIconSrc from '../../assets/moon-svgrepo-com.svg';
import SunIconSrc from '../../assets/sun-svgrepo-com.svg';

const PREFIX = 'LightDarkToggle';

const classes = {
  button: `${PREFIX}-button`,
  light: `${PREFIX}-light`,
  dark: `${PREFIX}-dark`,
  sun: `${PREFIX}-sun`,
  moon: `${PREFIX}-moon`,
  showSun: `${PREFIX}-show-sun`,
  hideSun: `${PREFIX}-hide-sun`,
  showMoon: `${PREFIX}-show-moon`,
  hideMoon: `${PREFIX}-hide-moon`,
};

const SunMoonButton = styled.button(() => ({
  [`&.${classes.light}`]: {
    background: 'aliceblue',
    border: '2px solid white',
  },
  [`&.${classes.dark}`]: {
    background: 'slategrey',
    border: '2px solid white',
  },
  [`&.${classes.button}`]: {
    borderRadius: '2em',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '0.2em',
    position: 'relative',
    width: '4em',
    height: '2em',
  },
}));

const DefaultMoonIcon = () => <img src={MoonIconSrc} alt="dark" />;
const DefaultSunIcon = () => <img src={SunIconSrc} alt="light" />;

const MovableSunIconContainer = styled.div(() => ({
  [`&.${classes.sun}`]: {
    width: '1.5em',
    height: '1.5em',
    transitionProperty: 'transform background',
    transitionDuration: '400ms',
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
    width: '1.5em',
    height: '1.5em',
    transitionProperty: 'transform',
    transitionDuration: '400ms',
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
  onToggle?: (isLight: boolean) => void;
}

export const LightDarkToggle: FunctionComponent<LightDarkToggleProps> = ({
  className,
  isLight,
  sunIconComponent: SunIcon = DefaultSunIcon,
  moonIconComponent: MoonIcon = DefaultMoonIcon,
  onToggle,
  type,
  ...otherProps
}) => {
  const handleClick = useCallback(
    () => onToggle?.(!isLight),
    [isLight, onToggle]
  );
  return (
    <SunMoonButton
      className={cn(
        classes.button,
        isLight ? classes.light : classes.dark,
        className
      )}
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
    </SunMoonButton>
  );
};
