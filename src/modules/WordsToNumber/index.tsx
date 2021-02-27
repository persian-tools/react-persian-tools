import React, { Fragment } from 'react';
import {
  WordsToNumberOptions,
  WordsToNumber as WordsToNumberJS
} from '@persian-tools/persian-tools';

export interface WordsToNumberProps extends WordsToNumberOptions {
  /**
   * Main input text
   */
  children: string;
}

export const WordsToNumber = ({
  children,
  ...restProps
}: WordsToNumberProps): JSX.Element => {
  const converted = WordsToNumberJS.convert(children, restProps);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export default WordsToNumber;
