import './App.css';
//import utama
import React from 'react';
import Utama from './components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        <Utama/>
      </div>
    );
  }
}

//export
export default App;