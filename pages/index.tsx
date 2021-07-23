import React from 'react';
import Head from 'next/head';
import Controls from '../src/components/Controls';

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker project from https://frontendmentor.io" />
      </Head>

      <main>
        <Controls />
        <div style={{ background: 'aquamarine', height: '100%' }} />
      </main>
    </div>
  );
}
