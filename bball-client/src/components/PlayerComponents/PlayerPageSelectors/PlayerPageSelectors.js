import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './PlayerPageSelectors.css';
import getInitial from '../../../utils/getInitial';

function PlayerPageSelectors(props) {
  const lastInitial = props.lastInitial;
  const playerID = props.playerID;
  const mode = props.mode;
  const seasons = props.seasons;
  const team = props.team.data ? props.team : null;
  const [showMenu, setShowMenu] = useState(false);
  const [menuMode, setMenuMode] = useState('none');

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
        setMenuMode('none');
  });
  console.log(team)
    return(
            <div className="info-selectors" onMouseEnter={(e)=> handleMouseEnter(e)} onMouseLeave={(e)=> handleMouseLeave(e)}>
                <br />
                <Link to={`/players/${lastInitial}/${playerID}/overview`}><button onMouseEnter={(e)=> handleMouseEnter(e, 'none')} className={mode==='overview' ? 'active' : ''}>Overview</button></Link>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'gamelog')} className={mode==='gamelog' ? 'active gamelog' : 'gamelog'}>Game Logs
                </button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'generalSplits')} className={mode==='generalSplits' ? 'active generalSplits' : 'generalSplits'}>Splits</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'shootingSplits')} className={mode==='shootingSplits' ? 'active shootingSplits' : 'shootingSplits'}>Shooting</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'none')} className={mode==='more' ? 'active more' : 'more'}>More</button>
                {
                    team &&
                    <button onMouseEnter={(e)=> handleMouseEnter(e, 'team')} className={mode==='team' ? 'active team' : 'team'}>2021-22 {team.data.resultSets[0].rowSet[0][2]}</button>
                }
                {
                    showMenu &&
                    <div className={`menu-selector ${menuMode === 'none' ? '' : 'show'}`}>
                    {
                        menuMode==='gamelog' &&
                        <div className="menu-item">
                            <p>Game-by-game stat line for the player</p>
                            <div className="season-items">
                            {
                                    seasons[0].data.map((season) => {
                                    return(
                                        <div className="season-item">
                                            <Link to={`/players/${lastInitial}/${playerID}/gamelog/${season}`}>{season}</Link>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    }
                    {
                        menuMode==='generalSplits' &&
                        <div className="menu-item">
                            <p>Player stats broken down into various categories; i.e. home/away, monthly, etc..</p>
                            <div className="season-items">
                                {
                                    seasons[1].data.map((season) => {
                                        return(
                                            <div className="season-item">
                                                <Link to={`/players/${lastInitial}/${playerID}/generalSplits/${season}`}>{season}</Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        menuMode==='shootingSplits' &&
                        <div className="menu-item">
                            <p>Player Shooting History</p>
                            <div className="season-items">
                                {
                                    seasons[1].data.map((season) => {
                                        return(
                                            <div className="season-item">
                                                <Link to={`/players/${lastInitial}/${playerID}/shootingSplits/${season}`}>{season}</Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        menuMode==='team' &&
                        <div className="menu-item">
                            <div className="team-data">
                                <div className="team-item">
                                    <span><Link to={`/teams/${team.data.resultSets[0].rowSet[0][1]}/2021-22`}>2021-22 {team.data.resultSets[0].rowSet[0][2]}</Link></span>
                                    <span>({team.data.resultSets[0].rowSet[0][5]}-{team.data.resultSets[0].rowSet[0][6]})</span>
                                </div>
                                <div className="team-item">
                                    <span><Link to={`/teams/${team.data.resultSets[0].rowSet[0][1]}/2021-22/gamelog`}>Full Schedule and Results</Link></span>
                                </div>
                                <div className="team-item">
                                    <div className="player-list">
                                    {
                                        team.data.resultSets[1].rowSet.map((player) => {
                                            return(
                                                <div className="player-item">
                                                    <span><Link to={`/players/${getInitial(player[2])}/${player[1]}/overview`}>{player[2]}</Link></span>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                }
            </div>
        )
}

export default PlayerPageSelectors;