import React, {useState, useEffect} from 'react';

// import {Link} from 'react-router-dom';

import './Home.css';
import '../../SortableTable/SortableTable'

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //console.log('test');
    fetch(`/`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if(!data) {
    return(
      <div>
        test
      </div>
    )
  } else{
    console.log(data)
    return(
      <div className="home-container">
          test2
      </div>
    );
  }
}

export default Home;


