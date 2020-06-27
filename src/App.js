import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftSideNav from './components/LeftSideNav';
import Content from './components/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <LeftSideNav />
      <Content />
    </div>
  );
}
export default App;
