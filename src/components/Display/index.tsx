import React from 'react';
import DisplayStyled from './DisplayStyled';

const Display = ({ ipData }: {
  ipData: {
    label: string;
    value: string;
  }[]
}) => (
  <DisplayStyled>
    {ipData.map((data) => (
      <div key={data.label}>
        <div className="label">{data.label}</div>
        <div className="value">{data.value}</div>
      </div>
    ))}
  </DisplayStyled>
);

export default Display;
