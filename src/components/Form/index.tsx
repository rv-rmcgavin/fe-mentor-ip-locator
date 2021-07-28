import React, { useEffect, useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IP_REGEX, DOMAIN_REGEX } from '../../constants';
import FormStyled from './FormStyled';

const Form = ({ setIpData, setCoords }: {
  setIpData: React.Dispatch<React.SetStateAction<{
    label: string;
    value: string;
  }[]>>,
  setCoords: React.Dispatch<React.SetStateAction<number[]>>
}) => {
  const [on, setToggle] = useState(false);
  const [formValue, setFormValue] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [domain, setDomain] = useState('');
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const [formError, setFormError] = useState(false);
  const API_KEY: string | undefined = process.env.NEXT_PUBLIC_IPIFY_API_KEY;
  const BASE_URL: string = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;
  let url: string = '';
  if (ipAddress && !domain) {
    url = `${BASE_URL}&ipAddress=${ipAddress}`;
  } else if (!ipAddress && domain) {
    url = `${BASE_URL}&domain=${domain}`;
  } else {
    url = `${BASE_URL}`;
  }

  // handleFormInput will take in the value of `.ip-input`,validate it as a valid
  // ip address, and if so, assign its value to `ipAddress` with `setIpAddress`.
  const handleFormInput = (event: React.BaseSyntheticEvent): void => {
    setFormValue(event.target.value);
  };

  const updateUrl = () => {
    // set
    if (formValue.match(IP_REGEX)) {
      setIpAddress(formValue);
    } else if (formValue.match(DOMAIN_REGEX)) {
      setDomain(formValue);
    }
    setShouldSendRequest(true);
  };

  // reset puts default values back to `ipAddress` and `domain`
  const reset = (): void => {
    setIpAddress('');
    setDomain('');
    updateUrl();
  };

  const isFormValid = (): void => {
    if (!formValue.match(IP_REGEX) && !formValue.match(DOMAIN_REGEX)) {
      setFormError(true);
      console.error('form invalid'); // eslint-disable-line no-console
      console.log(formValue); // eslint-disable-line no-console
      return;
    }
    if (formError) setFormError(false);
    reset();
  };

  // handleRequest will send a `GET` request with with ipAddress/domain as a paramater to get
  // geolocation data.
  const handleRequest = useCallback(async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(url);
      const { ip, location, isp } = response.data;
      const {
        city, region, postalCode, timezone, lat, lng,
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
      setCoords([lat, lng]);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    setShouldSendRequest(false);
  }, [url, setIpData, setCoords]);

  useEffect(() => {
    if (shouldSendRequest) {
      handleRequest();
    }
  }, [shouldSendRequest, handleRequest]);

  useEffect(() => {
    if (!on) {
      setToggle(true);
      handleRequest();
    }
  }, [on, handleRequest]);

  return (
    <FormStyled error={formError}>
      {formError && (
        <div className="error">Please enter a valid IP address or domain</div>
      )}
      <div className="input-container">
        <input type="text" className="ip-input" value={formValue} onChange={(e) => handleFormInput(e)} placeholder="Search for any IP address or domain" />
        <button type="button" className="submit" onClick={() => isFormValid()}>
          {/* // TODO: Make this SVG a react component. You know you want to. */}
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
        </button>
      </div>
    </FormStyled>
  );
};

export default Form;
