import React, { Fragment } from 'react';
import {
  digitsArToFa,
  digitsArToEn,
  digitsEnToFa,
  digitsFaToEn
} from '@persian-tools/persian-tools';

export interface DigitsProps {
  /**
   * Main input text
   */
  children: string;
}

export const DigitsArToFa = ({ children }: DigitsProps): JSX.Element => {
  const converted = digitsArToFa(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export const DigitsArToEn = ({ children }: DigitsProps): JSX.Element => {
  const converted = digitsArToEn(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export const DigitsEnToFa = ({ children }: DigitsProps): JSX.Element => {
  const converted = digitsEnToFa(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export const DigitsFaToEn = ({ children }: DigitsProps): JSX.Element => {
  const converted = digitsFaToEn(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};
