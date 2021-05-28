import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Link} from "react-router-dom";

import Home from "../Card/Home/Home";
import './css/nav.css';
const Nav = (props) => {
  const [showlinks, setShowlinks] = useState(false);
  const {length,search,state,setState,results}=props;
  return (
    <div>
    <Router>
      <div className="NavBar">
        <div className="NavBar__left">
          <div className="NavBar__links" id={showlinks ? "hidden" : ""}>
           <Link to="/"  >Home</Link>
           <a href="/Notifiaction">
              <i class="far fa-bell"></i>
            </a> 
          </div>
          <i onClick={() => setShowlinks(!showlinks)} class="fas fa-bars bar"></i>
        </div>
        <div className="NavBar__right">
          <i class="fas fa-search"> </i>
          <form onSubmit={search}>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <Home  className="Home__style" length={length} results={results} state={state} />
      </Router>
    </div>
  );
};

export default Nav;

