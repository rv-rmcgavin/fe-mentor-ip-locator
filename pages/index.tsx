import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Controls from '../src/components/Controls';

export default function Home() {
  const [coords, setCoords] = useState([0, 0]);
  const Map = dynamic(
    () => import('../src/components/Map/index'), // replace '../src/components/Map/index' with your component's location
    { ssr: false }, // This line is important. It's what prevents server-side render
  );

  return (
    <div className="App">
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker project from https://frontendmentor.io" />
      </Head>

      <main>
        <Controls setCoords={setCoords} />
        <Map coords={coords} />
      </main>
    </div>
  );
}
