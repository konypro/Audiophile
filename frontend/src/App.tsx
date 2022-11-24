import React from 'react';
import './App.css';
import {HashRouter, Route, Routes,} from "react-router-dom"
import ArtistAdminAdd from "./Artist/ArtistModel/ArtistAdminAdd";
import ArtistAdminGet from "./Artist/ArtistModel/ArtistAdminGet";

export default function App() {

  return <>

    <header>
      <h1>Audiophile</h1>
    </header>
    <HashRouter>
      <Routes>
        <Route path="/ArtistAdminAdd" element={<ArtistAdminAdd/>}/>
        <Route path="/ArtistAdminGet" element={<ArtistAdminGet/>}/>


      </Routes>
    </HashRouter>


  </>
}

