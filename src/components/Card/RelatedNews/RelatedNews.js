import React from 'react';
import './css/relatednews.css';
import  {  useState,useEffect } from "react";
import axios from "axios";
import { apiKey } from "../api/api";

const RelateNews = (props) => {
  const {  state,length } = props;
    const [results, setResults] = useState([]);
 const related = async (e) => {
      try {
        const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}
`);
        if (response ) {
          setResults(response.data.articles);
          console.log(response.data.articles);
        }
      
      } catch (error) {
        console.log(error);
      }
  
  };
  useEffect(()=>{
    related();
  },[])
  const urlImage="https://images.ctfassets.net/hrltx12pl8hq/ubAQSr2iExW3EA5ZdB4iN/5c2dc2de13e0287ed385540d56d16b4e/vector-clear05.gif?fit=fill&w=480&h=268";
  return (
    <div className="container container3">
      { results!=null   ? results.map((result)=>(
        <div>
           <div className="container3__image">
<img src={result.urlToImage !=null ? result.urlToImage: urlImage } alt="Ycrx" />
</div>
<div className="container3__content">
<h4><b>{result.title}</b></h4>
<p>{result.content}</p>
</div>
          </div>
      )) :<h1>Loading...</h1> }
    </div>
  );
}

export default RelateNews;

