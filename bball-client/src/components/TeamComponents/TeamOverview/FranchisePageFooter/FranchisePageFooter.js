import React, {useState, useEffect, Fragment} from 'react';

import {Link, useParams} from 'react-router-dom';

function FranchisePageFooter(props) {
  const [data, setData] = useState(null);
  const teamID = props.teamID;

  useEffect(() => {
    console.log('rendering franchise footer')
}, [teamID]);

    return(
      <div className="player-page-footer">
            <h3 className='player-page-footer-header'>More Franchise Pages</h3>
            <Link to={`/teams/${teamID}/overview`}>Franchise Overview</Link>
            <div className="category">
                <h5 className='category-header'>Basic Stats</h5>
                <div className="season-items">
                    <div className="season-item">
                        <Link to={`/teams/${teamID}/stats-basic-totals`}>Team Stats</Link>
                    </div>
                    <div className="season-item">
                        <Link to={`/teams/${teamID}/stats-basic-pergame`}>Team Stats Per Game</Link>
                    </div>
                    <div className="season-item">
                        <Link to={`/teams/${teamID}/stats-opponent-totals`}>Opponent Stats</Link>
                    </div>
                    <div className="season-item">
                        <Link to={`/teams/${teamID}/stats-opponent-pergame`}>Opponent Stats Per Game</Link>
                    </div>
                </div>
            </div>
            <div className="category">
                <h5 className='category-header'>League Ranks</h5>
                <div className="season-items">
                <div className="season-item">
                    <Link to={`/teams/${teamID}/stats-rank-totals`}>Team Stats</Link>
                </div>
                <div className="season-item">
                    <Link to={`/teams/${teamID}/stats-rank-pergame`}>Team Stats Per Game</Link>
                </div>
                <div className="season-item">
                    <Link to={`/teams/${teamID}/stats-rank-opponent-totals`}>Opponent Stats</Link>
                </div>
                <div className="season-item">
                    <Link to={`/teams/${teamID}/stats-rank-opponent-pergame`}>Opponent Stats Per Game</Link>
                </div>
                </div>
            </div>
      </div>
    )
}

export default FranchisePageFooter;