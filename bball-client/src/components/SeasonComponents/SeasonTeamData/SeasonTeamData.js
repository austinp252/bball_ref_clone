import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function SeasonTeamData(props) {
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState('Team');
  const mode = props.mode;
  const title = props.title;
  const season = props.season;

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season team data")
      const res = await fetch(`/seasons/teamstats/Base/${mode}/${season}`);
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
    const headers = [{'header':'Rk', 'type':'number'}, {'header':'Team', 'type':'string'}, {'header':'G', 'type':'number'}, {'header':'MP', 'type':'number'}, {'header':'FG', 'type':'number'}, {'header':'FGA', 'type':'number'}, {'header':'FG%', 'type':'number'}, {'header':'3P', 'type':'number'}, {'header':'3PA', 'type':'number'}, {'header':'3P%', 'type':'number'}, {'header':'FT', 'type':'number'}, {'header':'FTA', 'type':'number'}, {'header':'FT%', 'type':'number'}, {'header':'ORB', 'type':'number'}, {'header':'DRB', 'type':'number'}, {'header':'TRB', 'type':'number'}, {'header':'AST', 'type':'number'}, {'header':'STL', 'type':'number'}, {'header':'BLK', 'type':'number'}, {'header':'TOV', 'type':'number'}, {'header':'PF', 'type':'number'}, {'header':'PTS', 'type':'number'}]
    const tableDataTeam = []
    const tableDataOpp = []
    data.Team.data.forEach((team, index) => {
        const dataItem = [];
        dataItem.push({'dataContent': index+1, 'link': null});
        dataItem.push({'dataContent': team[1], 'link': `/teams/${team[0]}/${season}`});
        dataItem.push({'dataContent': team[2], 'link': null});
        dataItem.push({'dataContent': team[6], 'link': null});
        dataItem.push({'dataContent': team[7], 'link': null});
        dataItem.push({'dataContent': team[8], 'link': null});
        dataItem.push({'dataContent': team[9], 'link': null});
        dataItem.push({'dataContent': team[10], 'link': null});
        dataItem.push({'dataContent': team[11], 'link': null});
        dataItem.push({'dataContent': team[12], 'link': null});
        dataItem.push({'dataContent': team[13], 'link': null});
        dataItem.push({'dataContent': team[14], 'link': null}); //fta
        dataItem.push({'dataContent': team[15], 'link': null});
        dataItem.push({'dataContent': team[16], 'link': null});
        dataItem.push({'dataContent': team[17], 'link': null});
        dataItem.push({'dataContent': team[18], 'link': null});
        dataItem.push({'dataContent': team[19], 'link': null}); //ast
        dataItem.push({'dataContent': team[21], 'link': null});
        dataItem.push({'dataContent': team[22], 'link': null});
        dataItem.push({'dataContent': team[20], 'link': null});
        dataItem.push({'dataContent': team[24], 'link': null}); //pf
        dataItem.push({'dataContent': team[26], 'link': null}); //pts
        tableDataTeam.push(dataItem);
    });
    data.Opponent.data.forEach((team, index) => {
        const dataItem = [];
        dataItem.push({'dataContent': index+1, 'link': null});
        dataItem.push({'dataContent': team[1], 'link': `/teams/${team[0]}/${season}`});
        dataItem.push({'dataContent': team[2], 'link': null});
        dataItem.push({'dataContent': team[6], 'link': null});
        dataItem.push({'dataContent': team[7], 'link': null});
        dataItem.push({'dataContent': team[8], 'link': null});
        dataItem.push({'dataContent': team[9], 'link': null});
        dataItem.push({'dataContent': team[10], 'link': null});
        dataItem.push({'dataContent': team[11], 'link': null});
        dataItem.push({'dataContent': team[12], 'link': null});
        dataItem.push({'dataContent': team[13], 'link': null});
        dataItem.push({'dataContent': team[14], 'link': null}); //fta
        dataItem.push({'dataContent': team[15], 'link': null});
        dataItem.push({'dataContent': team[16], 'link': null});
        dataItem.push({'dataContent': team[17], 'link': null});
        dataItem.push({'dataContent': team[18], 'link': null});
        dataItem.push({'dataContent': team[19], 'link': null}); //ast
        dataItem.push({'dataContent': team[21], 'link': null});
        dataItem.push({'dataContent': team[22], 'link': null});
        dataItem.push({'dataContent': team[20], 'link': null});
        dataItem.push({'dataContent': team[24], 'link': null}); //pf
        dataItem.push({'dataContent': team[26], 'link': null}); //pts
        tableDataOpp.push(dataItem);
    });
    return(
    <div className="season-pergame-content">
        <h3>{title} Stats</h3>
        <div className="data-selectors">
            <button onClick={() => setShowData('Team')}>Team</button>
            <button onClick={() => setShowData('Opponent')}>Opponent</button>
          </div>
          {
              showData === 'Team' ?
              <SortableTable headers={headers} tableData = {tableDataTeam} defaultIndex = {21}/>
              :
              <SortableTable headers={headers} tableData = {tableDataOpp} defaultIndex = {21}/>
          }
    </div>
    )
  }
}

export default SeasonTeamData;