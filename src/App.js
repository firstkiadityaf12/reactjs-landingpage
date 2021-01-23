import './App.css';
//import utama
import React from 'react';
import Navbar from "./components/Navbar"
import {Switch, Route} from "react-router-dom"

//import semua halaman yang ditampilkan
import beranda from "./components/pages/beranda"
import kontak from "./components/pages/kontak"
import gallery from "./components/pages/gallery"

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={beranda} />
            <Route path="/kontak" component={kontak} />
            <Route path="/gallery" component={gallery} />
          </Switch>
      </div>
    )
  }
}

//export
export default App;