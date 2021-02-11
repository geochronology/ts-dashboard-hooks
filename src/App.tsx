import React from 'react';
import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">

      <Nav />

      <div className="container-fluid">
        <div className="row">


          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <Dashboard />


          </main>
        </div>
      </div>
    </div >
  );
}

export default App;
