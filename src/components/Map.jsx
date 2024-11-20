import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ coords, places, setCoords, setBounds, setChildClicked }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBBjEbtUaSZat8lyr309unBvjUYt1gp1w8",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      defaultCenter={coords}
      center={coords}
      defaultZoom={14}
      onChange={(e) => {
        console.log(e);
        setCoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      onChildClick={(child) => setChildClicked(child)}
    >
      {/* {places.length &&
        places.map((place, i) => (
          <div
            className="relative"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches ? (
              <div className="text-blue-500 text-3xl">📍</div>
            ) : (
              <div className="p-4 bg-white shadow-lg rounded">
                <h2 className="text-sm font-medium mb-2">{place.name}</h2>
                <img
                  className="w-full h-32 object-cover mb-2"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                />
                <div className="flex items-center">
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            )}
          </div>
        ))} */}
    </GoogleMap>
  ) : null;
};

export default Map;
