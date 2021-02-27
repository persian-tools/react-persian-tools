import React, { Fragment } from 'react';
import { verifyIranianNationalId } from '@persian-tools/persian-tools';

export interface NationalIdProps {
  /**
   * Main input text
   */
  children: string;
}

export const NationalId = ({ children }: NationalIdProps): JSX.Element => {
  const converted = verifyIranianNationalId(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export default NationalId;
