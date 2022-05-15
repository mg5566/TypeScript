import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyA9rlMDhBLm5iFqwAwWawD9YQtSNaD51FM";

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const searchHandler = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("address", addressInput.value);
  const enteredAddress = addressInput.value;

  // send address to Google's API
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinates,
        zoom: 16,
      });
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
};

form.addEventListener("submit", searchHandler);
