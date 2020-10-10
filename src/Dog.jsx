import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const DogApiFetch = () => {
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [breedName, setBreed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeDogImage = () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const endpoint = baseUrl + "/breed/" + breedName + "/images/random";

    setIsLoading(true);
    setError("");
    setImage("");

    // const Token = "random_token";
    // const options = { headers: { Authorization: Token } };

    axios
      .get(endpoint)
      .then((r) => {
        //   2xx series
        // r.data - common
        setImage(r.data.message);
      })
      .catch((e) => {
        //   error handler 4xx 3xx && 5xx series
        // e.response.data - common
        setError(e.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeBreedName = (e) => {
    const { value } = e.target;
    setBreed(value);
  };

  return (
    <>
      <div className="container">
        {isLoading ? <h6>Loading Please Wait</h6> : null}
        <img src={image} alt="DogImage" />
        <br />
        <input type="text" value={breedName} onChange={changeBreedName} />
        <button onClick={changeDogImage}>Get German Sheperd Image</button>
        <h6>{error}</h6>
      </div>
    </>
  );
};

export default DogApiFetch;
