import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import LightBar from './components/LightBar'

function App() {
  return (
    <>
      <LightBar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
