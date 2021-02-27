import React, { Fragment } from 'react';
import { removeCommas } from '@persian-tools/persian-tools';

export interface RemoveCommasProps {
  /**
   * Main input text
   */
  children: string;
}

export const RemoveCommas = ({ children }: RemoveCommasProps): JSX.Element => {
  const converted = removeCommas(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};
