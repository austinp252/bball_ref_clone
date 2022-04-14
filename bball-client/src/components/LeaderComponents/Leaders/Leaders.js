import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import AllTimeLeaders from '../AllTimeLeaders/AllTimeLeaders';
import CurrentSeasonLeaders from '../CurrentSeasonLeaders/CurrentSeasonLeaders';

import './Leaders.css';

import {Link, useParams} from 'react-router-dom';

function Leaders() {
  const [season, setSeason] = useState('2021-22');

  const seasonOptions = [{"label": "2014-15", "value": "2014-15"}, {"label": "2015-16", "value": "2015-16"}, {"label": "2016-17", "value": "2016-17"}, {"label": "2017-18", "value": "2017-18"}, {"label": "2018-19", "value": "2018-19"}, {"label": "2019-20", "value": "2019-20"}, {"label": "2020-21", "value": "2020-21"}, {"label": "2021-22", "value": "2021-22"}]

  const handleSubmit = (e) => {
    const newSeason = e.target[0].value;
    setSeason(newSeason);
    console.log(newSeason);
    e.preventDefault();
  }

  useEffect(() => {
    console.log('rendering')
}, [season]);

    return(
      <div className="content">
        <div className="header">
          <h3>NBA Leaders and Records</h3>
        </div>
        <div className="season-selector">
            <form onSubmit={handleSubmit}>
                <Dropdown value={season} selections={seasonOptions}/>
            <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="current-season-leaders">
          <CurrentSeasonLeaders season={season}/>
        </div>
        <div className="regular-season-leaders">
          <AllTimeLeaders/>
        </div>
      </div>
    )
}

export default Leaders;
