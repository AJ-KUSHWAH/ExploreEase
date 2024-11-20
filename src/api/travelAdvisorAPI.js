/* eslint-disable consistent-return */
import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "574e34b4eamshb7d9d4e7be3b359p17c001jsn0a91afe66479",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get(
//         "https://community-open-weather-map.p.rapidapi.com/find",
//         {
//           params: { lat, lon: lng },
//           headers: {
//             "x-rapidapi-key": process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//           },
//         }
//       );

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getRailwayData = async () => {
//   try {
//     const { data: { data } } = await axios.get(`https://irctc1.p.rapidapi.com/api/v1/searchStation`, {
//       params: {fromStationCode: 'bju', toStationCode: 'bdts'},
//       headers: {
//         'X-RapidAPI-Key': '574e34b4eamshb7d9d4e7be3b359p17c001jsn0a91afe66479',
//         'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//   }
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
//   params: {query: 'BJU'},
//   headers: {
//     'X-RapidAPI-Key': '574e34b4eamshb7d9d4e7be3b359p17c001jsn0a91afe66479',
//     'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
