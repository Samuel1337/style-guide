import './App.css';
import background from './images/backgrounds/background05.jpg';
import {FaChevronDown} from 'react-icons/fa';
import Page from './components/page/page';
import Footer from './components/footer/footer';
import React from 'react';

class App extends React.Component {


  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img className="background" src={background}/>
          <a href="#home"  className='cable-top'>
            <h1>Cable<span>®</span></h1>
          </a>
          <div className='opening-text'>
            <a href="#home">
              <h1 className='emphasis'>STYLE GUIDE.</h1>
            </a>
            <a href="#home">
              <h1 className='chevron'><FaChevronDown/></h1>
            </a>
          </div>
        </header>
        <Page />
        <Footer />
      </div>
    );
  }

}

export default App;
