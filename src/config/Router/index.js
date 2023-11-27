// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route/>
      </Switch>
    </Router>
  );
};

export default App;
