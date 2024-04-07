import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

import { FaSearch } from "react-icons/fa";
import './place.components.css'

const PlaceComponent = () => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC9p8C6f47xxvfCYLX8eE4SMsrXMLVwsiw"
      libraries={["places"]}
    >
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            className="form-control" // Note: It should be className, not classname
            placeholder="Type to search..."
          />
        </StandaloneSearchBox>
      </div>
    </LoadScript>
  );
};
export default PlaceComponent;
