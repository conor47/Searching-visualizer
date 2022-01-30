import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PathFinding from './Components/PathFinding';
import Navbar from './Components/Navbar';
import Submenu from './Components/SubMenu';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Submenu />
      <Routes>
        <Route path="/pathfinding" element={<PathFinding />}>
          {/* <PathFinding />; */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
