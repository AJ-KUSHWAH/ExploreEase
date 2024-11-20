import React, { useState, useEffect } from "react";
import Header from "./Header";
import Map from "./Map";
import CardList from "./CardList";

import { getPlacesData } from "../api/travelAdvisorAPI";

const MainContainer = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  // const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      // setIsLoading(true);

      // getWeatherData(coords.lat, coords.lng).then((data) =>
      //   setWeatherData(data)
      // );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
  }, [bounds, coords, type]);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <div className="sm:flex flex-grow m-2">
        <div className="w-full sm:w-1/3 h-full mr-1">
          <div className=" p-4 h-full">
            <CardList
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </div>
        </div>
        <div className="w-full sm:w-2/3 h-full ml-1">
          <div className="bg-gray-500 p-4 h-full">
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              bounds={bounds}
              // weatherData={weatherData}
              places={filteredPlaces.length ? filteredPlaces : places}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
