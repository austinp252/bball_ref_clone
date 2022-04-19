import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';


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
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'stats')} className={mode==='stats' ? 'active stats' : 'stats'}>Year-By-Year</button>
                <button onMouseEnter={(e)=> handleMouseEnter(e, 'none')} className={mode==='more' ? 'active more' : 'more'}>More</button>
                {
                    showMenu &&
                    <div className={`menu-selector ${menuMode === 'none' ? '' : 'show'}`}>
                    {
                        menuMode==='stats' &&
                        <div className="menu-item">
                            <div className="category-items">
                            {
                                <div className="category-item">
                                  <Link to={`/teams/${teamID}/stats/totals/base`}>Basic</Link>
                                </div>
                            }
                            </div>
                        </div>
                    }
                </div>
                }
            </div>
        )
}

export default FranchisePageSelectors;