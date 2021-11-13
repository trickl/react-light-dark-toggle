import styled from '@emotion/styled';
import { CSSProperties } from '@mui/styled-engine';
import cn from 'classnames';
import { FunctionComponent, HTMLProps, useCallback } from 'react';

import MoonIconSrc from '../../assets/moon-svgrepo-com.svg';
import SunIconSrc from '../../assets/sun-svgrepo-com.svg';
import { LightDarkButton, LightDarkButtonOwnProps } from './LightDarkButton';

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
  position: 'absolute',
  transitionProperty: 'transform, filter',
};

interface MovableIconContainerProps {
  transform: string;
  filter: string;
  transitionDuration: string;
}

const MovableIconContainer: FunctionComponent<
  MovableIconContainerProps & HTMLProps<HTMLDivElement>
> = ({ transform, filter, transitionDuration, ...otherProps }) => (
  <div {...otherProps} />
);

const StyledIconContainer = styled(MovableIconContainer)(
  ({ transform, filter, transitionDuration }) => ({
    ...iconClasses,
    transform,
    filter,
    transitionDuration,
  })
);

export interface LightDarkToggleProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'as' | 'color'>,
    LightDarkButtonOwnProps {
  sunIconComponent?: FunctionComponent<Record<string, never>>;
  moonIconComponent?: FunctionComponent<Record<string, never>>;
  showSunTransform?: string;
  hideSunTransform?: string;
  showMoonTransform?: string;
  hideMoonTransform?: string;
  showSunFilter?: string;
  hideSunFilter?: string;
  showMoonFilter?: string;
  hideMoonFilter?: string;
  transitionDuration?: string;
  onToggle?: (isLight: boolean) => void;
}

export const LightDarkToggle: FunctionComponent<LightDarkToggleProps> = ({
  className,
  isLight,
  sunIconComponent: SunIcon = DefaultSunIcon,
  moonIconComponent: MoonIcon = DefaultMoonIcon,
  onToggle,
  type,
  darkBorderColor = 'grey',
  lightBorderColor = 'lightgrey',
  darkBackgroundColor = '#222222',
  lightBackgroundColor = '#EEEEEE',
  showSunTransform = 'translateY(0) translateX(-1em)',
  hideSunTransform = 'translateY(4em) translateX(-1em)',
  showMoonTransform = 'translateY(0) translateX(1em)',
  hideMoonTransform = 'translateY(-4em) translateX(1em)',
  showSunFilter = '',
  hideSunFilter = '',
  showMoonFilter = '',
  hideMoonFilter = '',
  transitionDuration = '750ms',
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
      onClick={handleClick}
      type="button"
      {...otherProps}
    >
      <StyledIconContainer
        className={cn(classes.sun, isLight ? classes.showSun : classes.hideSun)}
        transform={isLight ? showSunTransform : hideSunTransform}
        filter={isLight ? showSunFilter : hideSunFilter}
        transitionDuration={transitionDuration}
      >
        <SunIcon />
      </StyledIconContainer>
      <StyledIconContainer
        className={cn(
          classes.moon,
          !isLight ? classes.showMoon : classes.hideMoon
        )}
        transform={!isLight ? showMoonTransform : hideMoonTransform}
        filter={!isLight ? showMoonFilter : hideMoonFilter}
        transitionDuration={transitionDuration}
      >
        <MoonIcon />
      </StyledIconContainer>
    </LightDarkButton>
  );
};
