import React, { Fragment } from 'react';
import { halfSpace } from '@persian-tools/persian-tools';

export interface HalfSpaceProps {
  /**
   * Main input text
   */
  children: string;
}

export const HalfSpace = ({ children }: HalfSpaceProps): JSX.Element => {
  const converted = halfSpace(children);
  if (converted === undefined || converted === null) throw new Error();
  return <Fragment>{converted.toString()}</Fragment>;
};

export default HalfSpace;
