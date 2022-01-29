import React from 'react';
import PathFinding from './Components/PathFinding';
import Navbar from './Components/Navbar';
import Submenu from './Components/SubMenu';

const App = () => {
  return (
    <>
      <Navbar />
      <Submenu />
      <PathFinding />;
    </>
  );
};

export default App;
