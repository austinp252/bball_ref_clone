import React, {useState, useEffect} from 'react';

import {Link, useParams} from 'react-router-dom';

import FranchiseBasicInfo from '../FranchiseBasicInfo/FranchiseBasicInfo';
import FranchiseSeasons from '../FranchiseSeasons/FranchiseSeasons';
import FranchiseSeasonPer from '../FranchiseSeasons/FranchiseSeasonPer';

function FranchisePage() {
  const [data, setData] = useState(null);
  const params = useParams();
  const teamID = params.id;
  const mode = params.mode;
  var perMode = null;
  var measureMode = null;
  if(params.perMode) {
      perMode = params.perMode;
      measureMode = params.measureMode;
  }

  //const titleMeasure = {"overview": '', 'base': ' Stats - Basic', 'opponent': ' Opponent Stats - Basic'}

  useEffect(() => {
    console.log("rendering franchise front page")
}, [params.id]);

    return(
        <div className="content">
            <FranchiseBasicInfo teamID={teamID} mode={mode} title={''}/>
            {
                mode==='overview' &&
                <div className="page-contents">
                    <FranchiseSeasons teamID={teamID} title={'Seasons'}/>
                </div>
            }
            {
                mode==='stats' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'Totals'} measureMode={'Base'}/>
                </div>
            }
        </div>
      )
}

export default FranchisePage;
