import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './FranchisePageSelectors.css';

function FranchisePageSelectors(props) {
  const teamID = props.teamID;
  const mode = props.mode;
  const perMode = props.perMode
  const categories = props.categories;
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
    return(
            <div className="info-selectors" onMouseEnter={(e)=> handleMouseEnter(e)} onMouseLeave={(e)=> handleMouseLeave(e)}>
                <br />
                <Link to={`/teams/${teamID}/overview`}><button onMouseEnter={(e)=> handleMouseEnter(e, 'none')} className={mode==='overview' ? 'active' : ''}>Overview</button></Link>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'stats')} className={mode.substring(0,5)==='stats' ? 'active stats' : 'stats'}>Year-By-Year</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'none')} className={mode==='more' ? 'active more' : 'more'}>More</button>
                {
                    showMenu &&
                    <div className={`menu-selector ${menuMode === 'none' ? '' : 'show'}`}>
                    {
                        menuMode.substring(0,5)==='stats' &&
                        <div className="menu-item">
                            <div className="category">
                              <p>Basic Stats</p>
                              <div className="category-items">
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-basic-totals`}>Team Stats</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-basic-pergame`}>Team Stats Per Game</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-opponent-totals`}>Opponent Stats</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-opponent-pergame`}>Opponent Stats Per Game</Link>
                                </div>
                              </div>
                            </div>
                            <div className="category">
                              <p>League Ranks</p>
                              <div className="category-items">
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-rank-totals`}>Team Stats</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-rank-pergame`}>Team Stats Per Game</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-rank-opponent-totals`}>Opponent Stats</Link>
                                </div>
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats-rank-opponent-pergame`}>Opponent Stats Per Game</Link>
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

export default FranchisePageSelectors;