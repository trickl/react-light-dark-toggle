import styled from '@emotion/styled';
import cn from 'classnames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

const PREFIX = 'LightDarkButton';

const classes = {
  button: `${PREFIX}-button`,
  light: `${PREFIX}-light`,
  dark: `${PREFIX}-dark`,
};

export interface LightDarkButtonOwnProps {
  isLight?: boolean;
  /** The color of the light background */
  lightBackgroundColor?: string;
  /** The color of he dark background */
  darkBackgroundColor?: string;
  /** The border of the toggle when in light mode */
  lightBorderColor?: string;
  /** the border of the toggle when in dark mode */
  darkBorderColor?: string;
  buttonComponent?:
    | string
    | FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>>;
}

export type LightDarkButtonProps = LightDarkButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const UnstyledLightDarkButton: FunctionComponent<LightDarkButtonProps> = ({
  isLight,
  className,
  buttonComponent: ButtonComponent = 'button',
  lightBackgroundColor,
  darkBackgroundColor,
  lightBorderColor,
  darkBorderColor,
  ...otherProps
}) => {
  return (
    <ButtonComponent
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
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '2em',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: '4em',
    height: '2em',
    fontSize: '16px',
    transition: 'background-color',
    transitionDuration: '400ms',
  },
}));
