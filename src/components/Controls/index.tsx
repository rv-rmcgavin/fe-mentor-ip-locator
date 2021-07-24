import React, { useState } from 'react';
import ControlStyled from './ControlStyled';
import Form from '../Form';
import Display from '../Display';

const Controls = () => {
  const [ipData, setIpData] = useState([{ label: '', value: '' }]);
  return (
    <ControlStyled>
      <h1>IP Address Tracker</h1>
      <Form setIpData={setIpData} />
      <Display ipData={ipData} />
    </ControlStyled>
  );
};

export default Controls;
