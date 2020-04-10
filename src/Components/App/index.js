import React from 'react';
import Aside from 'Components/Aside';
import MapContainer from 'Components/MapContainer';
import GlobalStyle from 'styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Aside />
      <MapContainer />
    </div>
  );
}

export default App;
