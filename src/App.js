import React from 'react';
// import logo from './logo.svg';
import './App.css';

import LeftSideNav from './components/LeftSideNav/LeftSideNav';
import Content from './components/Content/Content';
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <LeftSideNav />
      <div className="app-wraper-content">
        {/* <Dialogs /> */}
        <Content />
      </div>
    </div>
  );
}
export default App;

