"use client";
import './findaspot.css';
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import SearchBar from "../components/SearchBar"; // Change this line
import { SearchResultsList } from '../components/SearchResultsList';

export default function findaspot() {

    const [results, setResults] = useState([]);
  return (
    <div className="bg-[#000130] w-screen h-screen bg-[url('/searchbarBackground.jpg')] bg-cover bg-center bg-no-repeat">
      <NavBar/>
        <div className="searchbar-container">
            <div>Where are you headed?</div>
            <SearchBar setResults = {setResults}/>
            <SearchResultsList results={results}/>
        </div>
    </div>
  );
}