import React, {useState, useEffect, Fragment} from 'react';
import './PlayerGameLogs.css';
import teamRouter from '../../widgets/Helpers/teamRouter';
import SortableTable from '../../widgets/SortableTable/SortableTable';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';

import {Link, useParams} from 'react-router-dom';

function PlayerStatsSeason() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/players/${params.letter}/${params.id}/gamelog/${params.season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

  if(!data) {
    //console.log(params.gameid);
    console.log('Loading');
    return(
        <div className="content">Loading...</div>
    )
} else {
    window.scrollTo(0,0);
    const headers = [{'header':'#', 'type':'number'}, {'header':'Date', 'type':'string'}, {'header':'Tm', 'type':'string'}, {'header':'Opp', 'type':'string'}, {'header':'Result', 'type':'string'}, {'header':'MP', 'type':'number'}, {'header':'FG', 'type':'number'}, {'header':'FGA', 'type':'number'}, {'header':'FG%', 'type':'number'}, {'header':'3P', 'type':'number'}, {'header':'3PA', 'type':'number'}, {'header':'3P%', 'type':'number'}, {'header':'FT', 'type':'number'}, {'header':'FTA', 'type':'number'}, {'header':'FT%', 'type':'number'}, {'header':'OREB', 'type':'number'}, {'header':'DREB', 'type':'number'}, {'header':'REB', 'type':'number'}, {'header':'AST', 'type':'number'}, {'header':'STL', 'type':'number'}, {'header':'BLK', 'type':'number'}, {'header':'TOV', 'type':'number'}, {'header':'PF', 'type':'number'}, {'header':'PTS', 'type':'number'}, {'header':'+/-', 'type':'number'}]
    const tableData1 = []
    const tableData2 = []
    data.regular.data.slice(0).reverse().forEach((game, index) => {
        const dataItem = [];
        dataItem.push({'dataContent': index+1, 'link': null});
        dataItem.push({'dataContent': game[8].split('T')[0], 'link': `/scores/${game[7]}/boxscore`});
        dataItem.push({'dataContent': game[5], 'link': `/teams/${teamRouter(game[5])}/${params.season}`});
        dataItem.push({'dataContent': game[9].split(' ')[2], 'link': `/teams/${teamRouter(game[9].split(' ')[2])}/${params.season}`});
        dataItem.push({'dataContent': game[10], 'link': null});
        dataItem.push({'dataContent': Math.round(game[11]), 'link': null});
        dataItem.push({'dataContent': game[12], 'link': null});
        dataItem.push({'dataContent': game[13], 'link': null});
        dataItem.push({'dataContent': game[14], 'link': null});
        dataItem.push({'dataContent': game[15], 'link': null});
        dataItem.push({'dataContent': game[16], 'link': null});
        dataItem.push({'dataContent': game[17], 'link': null});
        dataItem.push({'dataContent': game[18], 'link': null});
        dataItem.push({'dataContent': game[19], 'link': null});
        dataItem.push({'dataContent': game[20], 'link': null});
        dataItem.push({'dataContent': game[21], 'link': null});
        dataItem.push({'dataContent': game[22], 'link': null});
        dataItem.push({'dataContent': game[23], 'link': null});
        dataItem.push({'dataContent': game[24], 'link': null});
        dataItem.push({'dataContent': game[26], 'link': null});
        dataItem.push({'dataContent': game[27], 'link': null});
        dataItem.push({'dataContent': game[25], 'link': null});
        dataItem.push({'dataContent': game[29], 'link': null});
        dataItem.push({'dataContent': game[31], 'link': null});
        dataItem.push({'dataContent': game[32], 'link': null});
        tableData1.push(dataItem);
      });
      data.playoffs.data.slice(0).reverse().forEach((game, index) => {
        const dataItem = [];
        dataItem.push({'dataContent': index+1, 'link': null});
        dataItem.push({'dataContent': game[8].split('T')[0], 'link': `/scores/${game[7]}/boxscore`});
        dataItem.push({'dataContent': game[5], 'link': `/teams/${teamRouter(game[5])}/${params.season}`});
        dataItem.push({'dataContent': game[9].split(' ')[2], 'link': `/teams/${teamRouter(game[9].split(' ')[2])}/${params.season}`});
        dataItem.push({'dataContent': game[10], 'link': null});
        dataItem.push({'dataContent': Math.round(game[11]), 'link': null});
        dataItem.push({'dataContent': game[12], 'link': null});
        dataItem.push({'dataContent': game[13], 'link': null});
        dataItem.push({'dataContent': game[14], 'link': null});
        dataItem.push({'dataContent': game[15], 'link': null});
        dataItem.push({'dataContent': game[16], 'link': null});
        dataItem.push({'dataContent': game[17], 'link': null});
        dataItem.push({'dataContent': game[18], 'link': null});
        dataItem.push({'dataContent': game[19], 'link': null});
        dataItem.push({'dataContent': game[20], 'link': null});
        dataItem.push({'dataContent': game[21], 'link': null});
        dataItem.push({'dataContent': game[22], 'link': null});
        dataItem.push({'dataContent': game[23], 'link': null});
        dataItem.push({'dataContent': game[24], 'link': null});
        dataItem.push({'dataContent': game[26], 'link': null});
        dataItem.push({'dataContent': game[27], 'link': null});
        dataItem.push({'dataContent': game[25], 'link': null});
        dataItem.push({'dataContent': game[29], 'link': null});
        dataItem.push({'dataContent': game[31], 'link': null});
        dataItem.push({'dataContent': game[32], 'link': null});
        tableData2.push(dataItem);
      });
    return(
        <div className="content">
            <PlayerBasicInfo/>
            <div className="dataShow">
                <div className="regular-season">
                    <h2>{params.season} Regular Season</h2>
                    <SortableTable headers={headers} tableData={tableData1} subHeadDiv={20}/>
                </div>
                <div className="post-season">
                    <h2>{params.season} Post Season</h2>
                    <SortableTable headers={headers} tableData={tableData2}/>
                </div>
            </div>
        </div>
        
    )
}
}

export default PlayerStatsSeason;