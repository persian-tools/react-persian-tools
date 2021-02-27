import React, { Fragment } from 'react';
import { addCommas } from '@persian-tools/persian-tools';

export interface AddCommasProps {
  /**
   * Main input text
   */
  children: string;
}

export const AddCommas = ({ children }: AddCommasProps): JSX.Element => {
  const converted = addCommas(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};
