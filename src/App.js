import React, { useState, useEffect } from "react";
import Nav from "./components/header/Nav";
import axios from "axios";
import { apiKey } from "./components/api/api";
function App(props) {
  const [state, setState] = useState(props.state);
  const [results, setResults] = useState([]);
  const [length, setLength] = useState([]);
  const search = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${
        state.length != 0 ? state : "undefined"
      }&apiKey=${apiKey}
`);
      if (response) {
        setResults(response.data.articles);
        setLength(response.data.articles.length);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //refresh and gets the data after getting from server
    async function getQuery() {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${
          state != null ? state : "undefined"
        }&apiKey=${apiKey}
`);
        if (response) {
          setLength(response.data.articles.length);
          setResults(response.data.articles);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getQuery();
  }, []);
  return (
    <div className="App">
      <Nav
        className="Nav__style"
        length={length}
        results={results}
        search={search}
        state={state}
        setState={setState}
      />
    </div>
  );
}

export default App;
