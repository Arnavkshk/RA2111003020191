import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:id" component={Details} />
      </Routes>
    </Router>
  );
}

export default App;
