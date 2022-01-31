import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PathFinding from './Components/PathFinding';
import Sorting from './Components/Sorting';
import Navbar from './Components/Navbar';
import Submenu from './Components/SubMenu';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Submenu />
      <Routes>
        <Route path="/searching" element={<PathFinding />} />
        <Route path="/sorting" element={<Sorting />} />
      </Routes>
    </Router>
  );
};

export default App;
