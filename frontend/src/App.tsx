import React from 'react';
import './App.css';
import {HashRouter, Route, Routes,} from "react-router-dom"
import AllArtists from "./Artist/ArtistModel/AllArtists";

export default function App() {

  return <>
    <header>
      <h1>Audiophile</h1>
    </header>
    <HashRouter>
      <Routes>
        <Route path="/allArtists" element={<AllArtists/>}/>

      </Routes>
    </HashRouter>


  </>
}

