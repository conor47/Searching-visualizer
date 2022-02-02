import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PathFinding from './Components/PathFinding';
import Sorting from './Components/Sorting';
import Error from './Components/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PathFinding />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
