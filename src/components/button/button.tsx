import React from 'react';
import './button.styles';
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export const BUTTON_TYPES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES.base) => ({
  [BUTTON_TYPES.base]: BaseButton,
  [BUTTON_TYPES.google]: GoogleSignInButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
}[buttonType]);

interface ButtonProps {
  buttonType?: string;
  children: React.ReactNode;

  [key: string]: any;
}

export function Button ({
  children,
  buttonType,
  ...otherProps
}: ButtonProps) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
}
