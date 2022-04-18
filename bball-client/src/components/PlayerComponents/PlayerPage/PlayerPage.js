import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';
import PlayerSplitsCareer from '../PlayerSplits/PlayerSplitsCareer';
import PlayerStatsSeason from '../PlayerGameLogs/PlayerGameLogs';
import PlayerGeneralSplits from '../PlayerGeneralSplits/PlayerGeneralSplits';

import {Link, useParams} from 'react-router-dom';

function PlayerPage() {
  const [data, setData] = useState(null);
  const params = useParams();
  const lastInitial = params.letter;
  const playerID = params.id;
  const mode = params.mode;


  useEffect(() => {
    console.log("rendering player front page")
}, [params.id]);

    return(
        <div className="content">
          <PlayerBasicInfo lastInitial={lastInitial} playerID={playerID} mode={mode}/>
          {
            mode==='overview' &&
            <div className="page-contents">
              <PlayerSplitsCareer lastInitial={lastInitial} playerID={playerID} perMode={'PerGame'} title={'Per Game'}/>
              <PlayerSplitsCareer lastInitial={lastInitial} playerID={playerID} perMode={'Totals'} title={'Totals'}/>
              <PlayerSplitsCareer lastInitial={lastInitial} playerID={playerID} perMode={'Per36'} title={'Per 36 Minutes'}/>
            </div>
          }
          {
            mode==='gamelog' &&
            <div className="page-contents">
              <PlayerStatsSeason/>
            </div>
          }
          {
            mode==='generalSplits' &&
            <div className="page-contents">
              <PlayerGeneralSplits/>
            </div>
          }
        </div>
      )
}

export default PlayerPage;

//pergame
//totals
//per36

//per100 poss (not available for entire career, can only be called by season)
//advanced
//shooting

//adjusted shooting
//play by play
//game highs
//playoff series
//allstar
//college