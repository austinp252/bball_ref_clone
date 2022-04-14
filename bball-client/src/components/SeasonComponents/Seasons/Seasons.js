import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import SeasonStandings from '../SeasonStandings/SeasonStandings';
import SeasonLeaders from '../SeasonLeaders/SeasonLeaders';

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
    fetch(`/seasons/${season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, [season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
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
        <SeasonLeaders season={season}/>
      </div>
    )
  }
}

export default Seasons;

{/* <SeasonStandings season={season}/> */}
