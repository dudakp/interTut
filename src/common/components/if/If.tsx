import React from 'react';
import { IfProps } from './If.types';

const If: React.FC<IfProps> = ({ ifTrue, children }) => {
  return <>{ifTrue ? children : ''}</>;
};
export default If;
