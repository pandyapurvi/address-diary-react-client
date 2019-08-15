import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Address from './components/Address';
import NewAddress from './components/NewAddress';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
       <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component = {Address} />
        <Route exact path="/newAddress" component = {NewAddress} />
      </BrowserRouter>
    </div>
  );
}

export default App;
