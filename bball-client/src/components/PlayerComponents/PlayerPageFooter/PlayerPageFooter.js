import React, {useState, useEffect, Fragment} from 'react';

import {Link, useParams} from 'react-router-dom';

import './PlayerPageFooter.css';

function PlayerPageFooter() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season general splits data")
      const res = await fetch(`/players/${params.letter}/${params.id}/footer`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, [params.season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      console.log(data)
    return(
      <div className="player-page-footer">
          <h3 className='player-page-footer-header'>More {data.basic[0][3]} Pages</h3>
          <Link to={`/players/${params.letter}/${params.id}/overview`}>{data.basic[0][3]} Overview</Link>
          {
            data.seasons.map((mode) => {
                if(mode.data.length > 0) {
                    return(
                        <div className="category">
                            <h5 className='category-header'>{mode.title}</h5>
                            <div className="season-items">
                            {
                                mode.data.map((seasonItem) => {
                                    return(
                                        <div className="season-item">
                                            <Link to={`/players/${params.letter}/${params.id}/${mode.mode}/${seasonItem}`}>{seasonItem}</Link>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    )
                }
            })
          }
      </div>
    )
  }
}

export default PlayerPageFooter;