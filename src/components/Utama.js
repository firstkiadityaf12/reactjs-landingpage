import React from 'react'
//untuk menswitch halaman
import {Switch, Route} from 'react-router-dom';

//import semua halaman
import beranda from './beranda';
import tentangsaya from './tentangsaya';
import karya from './karya';
import kontak from './kontak';

//mengatur beranda awal untuk switch
const Utama = () => (
    <switch>
        <Route exact path="/" component={beranda}/>
        <Route path="/tentangsaya" component={tentangsaya}/>
        <Route path="/karya" component={karya}/>
        <Route path="/kontak" component={kontak}/>
    </switch>
)

//export ke app.js
export default Utama;