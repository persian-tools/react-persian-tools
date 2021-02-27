import React, { Fragment } from 'react';
import {
  NumberToWordsOptions,
  NumberToWords as NumberToWordsJS
} from '@persian-tools/persian-tools';

export interface NumberToWordsProps extends NumberToWordsOptions {
  /**
   * Main input text
   */
  children: string;
}

export const NumberToWords = ({
  children,
  ...restProps
}: NumberToWordsProps): JSX.Element => {
  const converted = NumberToWordsJS.convert(children, restProps);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export default NumberToWords;
