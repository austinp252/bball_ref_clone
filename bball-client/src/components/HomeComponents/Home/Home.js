import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //console.log('test');
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if(data) {
    return(
      <div className="home-container">
          <div className="home">
              <h1>
                  {data.message}
              </h1>
          </div>
      </div>
    );
  } else{
    return(
      <div className="home-container">
          <div className="home">
              <h1>
                  Test text
              </h1>
          </div>
      </div>
    );
  }
}

export default Home;


