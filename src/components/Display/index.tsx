import React from 'react';
import DisplayStyled from './DisplayStyled';

const Display = () => {
  const displayData: { label: string, value: string }[] = [
    {
      label: 'ip address',
      value: '192.212.174.101',
    },
    {
      label: 'location',
      value: 'Brooklyn, NY 10001',
    },
    {
      label: 'timezone',
      value: 'UTC-05:00',
    },
    {
      label: 'isp',
      value: 'SpaceX Starlink',
    },
  ];

  return (
    <DisplayStyled>
      {displayData.map((data) => (
        <div key={data.label}>
          <div className="label">{data.label}</div>
          <div className="value">{data.value}</div>
        </div>
      ))}
    </DisplayStyled>
  );
};

export default Display;
