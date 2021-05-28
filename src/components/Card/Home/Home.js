import React, { useEffect } from 'react';
import './css/home.css';
import MidNav from '../MiddleNav/MiddleNav';
import SideNav from '../SideCard/SideCard';
import RelateNews from '../RelatedNews/RelatedNews';
const Home=(props)=> {
  const { results, state,length } = props;
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return (
    <div className="main">
      <div className="Card">
        <SideNav results={results} />
        <div className="Card__flex">
          <MidNav state={state}  length={length} results={results} />
        </div>
        <div className="Card__flex__right">
          {width > breakpoint ? <h3 className="realte__style"><b>Related-News</b></h3> : <h1>Error</h1>}
          {width >= breakpoint ? <RelateNews state={state}  length={length} /> : <h1>Error</h1>}
        </div>
      </div>
      {width <= breakpoint ? <h3 className="realte__style"><b>Related-News</b></h3> : ""}
      {width <= breakpoint ? <RelateNews  state={state}  length={length} /> : ""}
    </div>
  );
}

export default Home;
