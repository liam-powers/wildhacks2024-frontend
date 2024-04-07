'use client';
import './findaspot.css';
import NavBar from "../components/NavBar";
import PlaceComponent from '../components/place.components';
import { getMeters } from '../../../firebaseconfig';
import { useState } from 'react';

export default async function findaspot() {
  const [results, setResults] = useState([]);

  getMeters();
  return (
    <div className="bg-[#000130] w-screen h-screen bg-[url('/searchbarBackground.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar />
      <div className="searchbar-container">
        <div>Where are you headed?</div>
        <PlaceComponent setResults={setResults} />
        {/* <SearchBar setResults = {setResults}/>
            <SearchResultsList results={results}/> */}
      </div>
    </div>
  );
}
