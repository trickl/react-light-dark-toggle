import styled from '@emotion/styled';
import cn from 'classnames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

const PREFIX = 'LightDarkButton';

const classes = {
  button: `${PREFIX}-button`,
  light: `${PREFIX}-light`,
  dark: `${PREFIX}-dark`,
};

export interface LightDarkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLight?: boolean;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  borderWidth?: string;
}

const UnstyledLightDarkButton: FunctionComponent<LightDarkButtonProps> = ({
  isLight,
  className,
  lightBackgroundColor,
  darkBackgroundColor,
  lightBorderColor,
  darkBorderColor,
  borderWidth,
  ...otherProps
}) => {
  return (
    <button
      className={cn(
        classes.button,
        isLight ? classes.light : classes.dark,
        className
      )}
      {...otherProps}
    />
  );
};

export const LightDarkButton = styled(UnstyledLightDarkButton)((props) => ({
  [`&.${classes.light}`]: {
    backgroundColor: props.lightBackgroundColor,
    borderColor: props.lightBorderColor,
  },
  [`&.${classes.dark}`]: {
    backgroundColor: props.darkBackgroundColor,
    border: props.darkBorderColor,
  },
  [`&.${classes.button}`]: {
    borderWidth: props.borderWidth,
    borderStyle: 'solid',
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
