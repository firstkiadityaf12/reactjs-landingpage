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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="./beranda.js">Beranda</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./karya.js">Karya</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./kontak.js">Kontak</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./tentangsaya">Tentang Saya</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </switch>
)

//export ke app.js
export default Utama;