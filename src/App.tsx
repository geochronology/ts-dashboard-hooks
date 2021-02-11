import React from 'react';
import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />

        <div className="container-fluid">
          <div className="row">

            <Menu />

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

              <Route path={'/'} exact component={Dashboard} />
              <Route path={'/users'} component={Users} />

            </main>
          </div>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
