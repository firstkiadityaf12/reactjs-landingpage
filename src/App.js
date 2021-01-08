import './App.css';
//import utama
import React from 'react';
import Utama from './components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link"><Link to="/">Beranda</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><Link to="/tentangsaya">Tentang Saya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/karya">Karya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/kontak">kontak</Link></a>
            </li>
            {/* <p><Utama /></p> */}
          </ul>
        </div>
      </div>
      </nav>
      <p><Utama /></p>
      </div>
    );
  }
}

//export
export default App;