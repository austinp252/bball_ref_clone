import React, {useState, useEffect} from 'react';

import {Link, useParams} from 'react-router-dom';

import getInitial from '../../widgets/Helpers/getInitial';

function PlayerShootingSplits() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season shooting splits data")
      const res = await fetch(`/players/${params.letter}/${params.id}/${params.season}/splits`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, []);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      console.log(data)
    return(
      <div className="">
          test
      </div>
    )
  }
}

export default PLayer;