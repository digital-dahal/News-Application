import React from "react";
import "./css/middlenav.css";
function MidNav(props) {
  const { results, state, length } = props;
  return (
    <div className="container container2">
      <div>
        {length != 0 ? (
          results.map((result) => (
            <div>
              <h3>
                <b>{state}</b>
              </h3>
              <div className="container2__contents">
                <div class="uk-card-media-top">
                  <img
                    className="container2__image"
                    src={
                      result.urlToImage != null
                        ? result.urlToImage
                        : "https://images.ctfassets.net/hrltx12pl8hq/ubAQSr2iExW3EA5ZdB4iN/5c2dc2de13e0287ed385540d56d16b4e/vector-clear05.gif?fit=fill&w=480&h=268"
                    }
                    alt=""
                  />
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title">{result.title}</h3>
                  <p>{result.content}</p>
                </div>
                <div className="container2__paragraph">
                  <p>{result.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 class="uk-card-title">Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default MidNav;
