import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './PlayerPageSelectors.css';

function PlayerPageSelectors(props) {
  const lastInitial = props.lastInitial;
  const playerID = props.playerID;
  const mode = props.mode;
  const seasons = props.seasons;
  const [showMenu, setShowMenu] = useState(false);
  const [menuMode, setMenuMode] = useState('');

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    console.log("rendering selectors")
  }, [mode]); //props?
    //setPlayerInfo(data.basic.playerInfo);
  const handleMouseEnter = ((e, menu=null) => {
      if(!menu) {
        setShowMenu(true);
      } else {
        setMenuMode(menu);
      }
  });
  const handleMouseLeave = ((e) => {
        setShowMenu(false);
        setMenuMode('');
  });

    return(
            <div className="info-selectors" onMouseEnter={(e)=> handleMouseEnter(e)} onMouseLeave={(e)=> handleMouseLeave(e)}>
                <br />
                <Link to={`/players/${lastInitial}/${playerID}/overview`}><button onMouseEnter={(e)=> handleMouseEnter(e, 'overview')} className={mode==='overview' ? 'active' : ''}>Overview</button></Link>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'gamelog')} className={mode==='gamelog' ? 'active gamelog' : 'gamelog'}>Game Logs
                </button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'generalSplits')} className={mode==='generalSplits' ? 'active generalSplits' : 'generalSplits'}>Splits</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'shootingSplits')} className={mode==='shootingSplits' ? 'active shootingSplits' : 'shootingSplits'}>Shooting</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'more')} className={mode==='more' ? 'active more' : 'more'}>More</button>
                {
                    showMenu &&
                    <div className="season-selector">
                    {
                        menuMode==='gamelog' &&
                        seasons[0].data.map((season) => {
                            return(
                                <div className="season-item">
                                    <Link to={`/players/${lastInitial}/${playerID}/gamelog/${season}`}>{season}</Link>
                                </div>
                            )
                        })
                    }
                    {
                        menuMode==='generalSplits' &&
                        seasons[1].data.map((season) => {
                            return(
                                <div className="season-item">
                                    <Link to={`/players/${lastInitial}/${playerID}/generalSplits/${season}`}>{season}</Link>
                                </div>
                            )
                        })
                    }
                    {
                        menuMode==='shootingSplits' &&
                        seasons[1].data.map((season) => {
                            return(
                                <div className="season-item">
                                    <Link to={`/players/${lastInitial}/${playerID}/shootingSplits/${season}`}>{season}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        )
}

export default PlayerPageSelectors;