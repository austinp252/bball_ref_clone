import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import SeasonStandings from '../SeasonStandings/SeasonStandings';
import SeasonLeaders from '../SeasonLeaders/SeasonLeaders';
import SeasonTeamData from '../SeasonTeamData/SeasonTeamData';
import SeasonTeamDataAdvanced from '../SeasonTeamData/SeasonTeamDataAdvanced';

import {Link, useParams} from 'react-router-dom';

import './Seasons.css';

function Seasons() {
  const [data, setData] = useState(null);
  const [season, setSeason] = useState('2019-20');

  const seasonOptions = [{"label": "2014-15", "value": "2014-15"}, {"label": "2015-16", "value": "2015-16"}, {"label": "2016-17", "value": "2016-17"}, {"label": "2017-18", "value": "2017-18"}, {"label": "2018-19", "value": "2018-19"}, {"label": "2019-20", "value": "2019-20"}, {"label": "2020-21", "value": "2020-21"}]

  const handleSubmit = (e) => {
    const newSeason = e.target[0].value;
    setSeason(newSeason);
    console.log(newSeason);
    e.preventDefault();
  }

  useEffect(() => {
    console.log("fetching season data")
}, [season]);

    return(
      <div className="content">
        <div className="header">
          <h3>NBA {season} Season Summary</h3>
        </div>
        <div className="season-selector">
            <form onSubmit={handleSubmit}>
                <Dropdown value={season} selections={seasonOptions}/>
              <input type="submit" value="Submit"/>
            </form>
        </div>
        <SeasonStandings season={season}/>
        <SeasonLeaders season={season}/>
        <SeasonTeamData season={season} mode={'PerGame'} title={'Per Game'}/>
        <SeasonTeamData season={season} mode={'Totals'} title={'Total'}/>
        <SeasonTeamData season={season} mode={'Per100Possessions'} title={'Per 100 Possessions'}/>
        <SeasonTeamDataAdvanced season={season} title={'Advanced'}/>
      </div>
    )
}

export default Seasons;

