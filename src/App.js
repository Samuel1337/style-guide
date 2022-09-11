import './App.css';
import background from './images/backgrounds/background08.jpg';
import {FaChevronDown} from 'react-icons/fa';
import Page from './components/page/page';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="background" src={background} />
        <div className='opening-text'>
          <a href="#page-header">
            <h1>Cable</h1>
          </a>
          <a href="#page-header">
            <h1 className='emphasis'>STYLE GUIDE.</h1>
          </a>
          <a href="#page-header">
            <h1 className='chevron'><FaChevronDown/></h1>
          </a>
        </div>
      </header>
      <Page />
      <Footer />
    </div>
  );
}

export default App;
