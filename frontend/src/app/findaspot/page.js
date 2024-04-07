"use client";
import './findaspot.css';
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import PlaceComponent from '../components/place.components';
import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from "../firebaseconfig";

export default function findaspot() {

  const [results, setResults] = useState([]);

  useEffect(() => {
    // Function to call findMeters when component mounts
    async function fetchFindMeters() {
      const functions = getFunctions();
      const findMeters = httpsCallable(functions, 'findMeters');
      try {
        const result = await findMeters({ userFilters: demoFilters });
        const data = result.data;
        console.log(data);
        // Do something with the data if needed
        // const sanitizedMessage = data.text;
      } catch (error) {
        console.error('Error calling findMeters:', error);
      }
    }

    // Call the function when the component mounts
    fetchFindMeters();

    // Clean-up function (optional)
    return () => {
      // Any clean-up code if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Your demo filters
  const demoFilters = {
    destination: [41.8827, -87.6233],
    maxminuteswalking: 15,
    parkingHours: 2,
    budget: 5
  };

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
