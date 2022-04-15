import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function SeasonTeamDataAdvanced(props) {
  const [data, setData] = useState(null);
  const title = props.title;
  const season = props.season;

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season team advanced data")
      const res = await fetch(`/seasons/teamstats/Advanced/PerGame/${season}`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, [props.season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      const headers = [{'header':'Rk', 'type':'number'}, {'header':'Team', 'type':'string'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'ORtg', 'type':'number'}, {'header':'DRtg', 'type':'number'}, {'header':'NRtg', 'type':'number'}, {'header':'Pace', 'type':'number'}, {'header':'TS%', 'type':'number'}, {'header':'eFG%', 'type':'number'}, {'header':'AST%', 'type':'number'}, {'header':'TOV%', 'type':'number'}, {'header':'AST/TOV%', 'type':'number'}, {'header':'OREB%', 'type':'number'}, {'header':'DREB%', 'type':'number'}, {'header':'REB%', 'type':'number'}]
      const tableData = []
      data.data.forEach((team, index) => {
        const dataItem = [];
        dataItem.push({'dataContent': index+1, 'link': null});
        dataItem.push({'dataContent': team[1], 'link': `/teams/${team[0]}/${season}`});
        dataItem.push({'dataContent': team[4], 'link': null});
        dataItem.push({'dataContent': team[5], 'link': null});
        dataItem.push({'dataContent': team[8], 'link': null}); //ortg
        dataItem.push({'dataContent': team[10], 'link': null}); //drtg
        dataItem.push({'dataContent': team[12], 'link': null}); //nrtg
        dataItem.push({'dataContent': team[23], 'link': null}); //pace
        dataItem.push({'dataContent': team[21], 'link': null}); //ts
        dataItem.push({'dataContent': team[18], 'link': null}); //efg
        dataItem.push({'dataContent': team[13], 'link': null}); //ast%
        dataItem.push({'dataContent': team[19], 'link': null}); //tov%
        dataItem.push({'dataContent': team[14], 'link': null}); //ast/tov
        dataItem.push({'dataContent': team[16], 'link': null}); //oreb%
        dataItem.push({'dataContent': team[17], 'link': null}); //dreb%
        dataItem.push({'dataContent': team[18], 'link': null}); //reb%
        tableData.push(dataItem);
    });
    return(
    <div className="season-pergame-content">
        <h3>{title} Stats</h3>
          <SortableTable headers={headers} tableData = {tableData} defaultIndex = {6}/>
    </div>
    )
  }
}

export default SeasonTeamDataAdvanced;