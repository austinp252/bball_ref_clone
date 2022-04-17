import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './PlayerPageSelectors.css';

function PlayerPageSelectors(props) {
  const lastInitial = props.lastInitial;
  const playerID = props.playerID;
  const mode = props.mode;

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    console.log("rendering selectors")
  }, [mode]); //props?
    //setPlayerInfo(data.basic.playerInfo);
    return(
            <div className="info-selectors">
                <br />
                <Link to={`/players/${lastInitial}/${playerID}/overview`}><button className={mode==='overview' ? 'active' : ''}>Overview</button></Link>
                <button className={mode==='gamelog' ? 'active' : ''}>Game Logs</button>
                <button className={mode==='splits' ? 'active' : ''}>Splits</button>
                <button className={mode==='more' ? 'active' : ''}>More</button>
            </div>
        )
}

export default PlayerPageSelectors;