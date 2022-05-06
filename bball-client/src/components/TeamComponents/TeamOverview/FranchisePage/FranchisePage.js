import React, {useEffect} from 'react';

import {useParams} from 'react-router-dom';

import FranchiseBasicInfo from '../FranchiseBasicInfo/FranchiseBasicInfo';
import FranchiseSeasons from '../FranchiseSeasons/FranchiseSeasons';
import FranchiseSeasonPer from '../FranchiseSeasons/FranchiseSeasonPer';
import FranchisePageFooter from '../FranchisePageFooter/FranchisePageFooter';

function FranchisePage() {
//   const [data, setData] = useState(null);
  const params = useParams();
  const teamID = params.id;
  const mode = params.mode;
//   var perMode = null;
//   var measureMode = null;
//   if(params.perMode) {
//       perMode = params.perMode;
//       measureMode = params.measureMode;
//   }

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
                mode==='stats-basic-totals' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'Totals'} measureMode={'Base'} title={'Basic Stats - (Totals) - '} hideRank={true}/>
                </div>
            }
            {
                mode==='stats-basic-pergame' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'PerGame'} measureMode={'Base'} title={'Basic Stats - (Per Game) - '} hideRank={true}/>
                </div>
            }
            {
                mode==='stats-opponent-totals' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'Totals'} measureMode={'Opponent'} title={'Opponent Stats - (Totals) - '} hideRank={true}/>
                </div>
            }
            {
                mode==='stats-opponent-pergame' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'PerGame'} measureMode={'Opponent'} title={'Opponent Stats - (Per Game) - '} hideRank={true}/>
                </div>
            }
            {
                mode==='stats-rank-totals' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'Totals'} measureMode={'Base'} title={'Ranks - (Totals) - '} hideRank={false}/>
                </div>
            }
            {
                mode==='stats-rank-pergame' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'PerGame'} measureMode={'Base'} title={'Ranks - (Per Game) - '} hideRank={false}/>
                </div>
            }
            {
                mode==='stats-rank-opponent-totals' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'Totals'} measureMode={'Opponent'} title={'Opponent Ranks - (Totals) - '} hideRank={false}/>
                </div>
            }
            {
                mode==='stats-rank-opponent-pergame' &&
                <div className="page-contents">
                    <FranchiseSeasonPer teamID={teamID} perMode={'PerGame'} measureMode={'Opponent'} title={'Opponent Ranks - (Per Game) - '} hideRank={false}/>
                </div>
            }
            <FranchisePageFooter teamID={teamID}/>
        </div>
      )
}

export default FranchisePage;
