import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function ExtraFeatures(props) {
  const [mediumTag, setmediumTag] = useState("");
  // const [mediumUrl, setmediumUrl] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    var result = await axios.get(
      `http://localhost:5000/api/creatingpdf?name=${mediumTag}`
    );
    console.log(mediumTag);

    // console.log(data);
    console.log(result);
  };

  //  mediumFullUrl = "hi";
  // console.log(mediumFullUrlUrl);

  // const clickHandler = () => {
  //   const [posts, setposts] = useState([]);

  //   useEffect(() => {
  //     axios.get(`http://localhost:5000/api/fetchingdata`).then((res) => {
  //       console.log(res);
  //       setposts(res.data);
  //     });
  // }
  // mediumFullUrl = window.location.href;
  // const clickHandler = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     mediumUrl,
  //     // mediumFullUrl,
  //   };
  //   try {
  //     const resp = await axios.post(
  //       `http://localhost:5000/api/creatingdata`,
  //       data
  //     );
  //     console.log(resp);
  //   } catch (err) {
  //     // Handle Error Here
  //     console.error(err);
  //   }
  // };
  return (
    <form className="search">
      <div className="row">
        <input
          id="mediumUrl"
          type="text"
          placeholder="Enter url"
          value={mediumTag}
          onChange={(e) => setmediumTag(e.target.value)}
        />
        <button className="primary" type="submit" onClick={submitHandler}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default ExtraFeatures;
