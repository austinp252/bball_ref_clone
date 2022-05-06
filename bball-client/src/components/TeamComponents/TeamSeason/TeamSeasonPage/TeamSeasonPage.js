import React, {useEffect} from 'react'

import {useParams} from 'react-router-dom';

import TeamBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';
// import TeamSeasonGamelog from '../TeamSeasonBasicInfo/TeamSeasonGamelog';
import TeamSeasonRoster from '../TeamSeasonRoster/TeamSeasonRoster';

export default function TeamSeasonPage() {
    const params = useParams();
    const teamID = params.id;
    const mode = params.mode;

    useEffect(() => {
        console.log("rendering team season front page")
    }, [teamID]);

  return (
    <div className="content">
        <TeamBasicInfo />
        {
            mode==="roster" &&
            <div className="page-contents">
                <TeamSeasonRoster/>
            </div>
        }
    </div>
  )
}
