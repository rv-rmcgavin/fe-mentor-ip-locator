import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import FormStyled from './FormStyled';

const Form = ({ setIpData }: {
  setIpData: React.Dispatch<React.SetStateAction<{
    label: string;
    value: string;
  }[]>>
}) => {
  const [ipAddress, setIpAddress] = useState('');
  const API_KEY: string | undefined = process.env.NEXT_PUBLIC_IPIFY_API_KEY;
  const URL: string = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

  // handleIpAddress will take in the value of `.ip-input`,validate it as a valid
  // ip address, and if so, assign its value to `ipAddress` with `setIpAddress`.
  const handleIpAddress = (event: React.BaseSyntheticEvent): void => {
    // TODO: validate data.
    setIpAddress(event.target.value);
  };

  // handleRequest will send a `GET` request with with ipAddress as a paramater to get
  // geolocation data for that IP.
  const handleRequest = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(URL);
      const { ip, location, isp } = response.data;
      const {
        city, region, postalCode, timezone,
      } = location;
      const displayData: { label: string, value: string }[] = [
        {
          label: 'ip address',
          value: ip,
        },
        {
          label: 'location',
          value: `${city} ${region}, ${postalCode}`,
        },
        {
          label: 'timezone',
          value: `UTC${timezone}`,
        },
        {
          label: 'isp',
          value: isp,
        },
      ];
      setIpData(displayData);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  };

  return (
    <FormStyled>
      <input type="text" className="ip-input" value={ipAddress} onChange={(e) => handleIpAddress(e)} />
      <button type="button" className="submit" onClick={handleRequest}>
        {/* // TODO: Make this SVG a react component. You know you want to. */}
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </FormStyled>
  );
};

export default Form;
