import * as React from 'react';
import PrintDocument from '../tests/printTest';

export interface ITestProps {
}

export default function Test (props: ITestProps) {
  return (
    <div>
      <PrintDocument />
    </div>
  );
}
