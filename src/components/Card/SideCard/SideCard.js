import React, { useState } from "react";
import "./css/sidecard.css";

function SideNav(props) {
  const [state, setState] = useState(false);
  const show = () => {
    setState(!state);
    !state
      ? (document.getElementById("alert").style.display = "block")
      : (document.getElementById("alert").style.display = "none");
  };
  return (
    <div className="container container1">
      <div className="container__card">
        <h3 class="uk-card-title">
          <b>Hey there!</b>
        </h3>
        <p>Hi! I'm a former News teller.</p>
      </div>
      <div className="container__list">
        <h3>Category</h3>
        <div id="alert" style={{ display: "none",color:"red" }}>
          Will be soon
        </div>
        <p onClick={show}>Politics</p>
        <p onClick={show}>Sports</p>
        <p onClick={show}>National</p>
        <p onClick={show}>Iinternational</p>
        <p onClick={show}>Games</p>
        <p onClick={show}>Technology</p>
        <p onClick={show}>Finance</p>
        <p onClick={show}>Health Care</p>
      </div>
    </div>
  );
}

export default SideNav;
