import React, {useState, useEffect} from 'react';
import './PlayerBio.css';
import teamRouter from '../../widgets/Helpers/teamRouter';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';
import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function PlayerBio() {
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState('Regular Season')
  const params = useParams();

  useEffect(() => {
    console.log("fetching player career stats")
    fetch(`/players/${params.letter}/${params.id}/stats`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

    if(!data) {
      return(
        <div className="content">Loading...</div>
      )
    } else {
    const headers = [{'header':'Season', 'type':'string'}, {'header':'Age', 'type':'number'}, {'header':'Tm', 'type':'string'}, {'header':'Lg', 'type':'empty'}, {'header':'GP', 'type':'number'}, {'header':'GS', 'type':'number'}, {'header':'MP', 'type':'number'}, {'header':'FGM', 'type':'number'}, {'header':'FGA', 'type':'number'}, {'header':'FG%', 'type':'number'}, {'header':'3PM', 'type':'number'}, {'header':'3PA', 'type':'number'}, {'header':'3P%', 'type':'number'}, {'header':'FT', 'type':'number'}, {'header':'FTA', 'type':'number'}, {'header':'FT%', 'type':'number'}, {'header':'OREB', 'type':'number'}, {'header':'DREB', 'type':'number'}, {'header':'REB', 'type':'number'}, {'header':'AST', 'type':'number'}, {'header':'STL', 'type':'number'}, {'header':'BLK', 'type':'number'}, {'header':'TOV', 'type':'number'}, {'header':'PF', 'type':'number'}, {'header':'PTS', 'type':'number'}]
    const tableData1 = []
    const tableData2 = []
    data.resultSets[0].rowSet.forEach((season) => {
      const dataItem = [];
      dataItem.push({'dataContent': season[1], 'link': `/players/${params.letter}/${params.id}/gamelog/${season[1]}`});
      dataItem.push({'dataContent': season[5], 'link': null});
      dataItem.push({'dataContent': season[4], 'link': `/teams/${teamRouter(season[4])}/${season[1]}`});
      dataItem.push({'dataContent': 'NBA', 'link': null});
      dataItem.push({'dataContent': season[6], 'link': null});
      dataItem.push({'dataContent': season[7], 'link': null});
      dataItem.push({'dataContent': season[8], 'link': null});
      dataItem.push({'dataContent': season[9], 'link': null});
      dataItem.push({'dataContent': season[10], 'link': null});
      dataItem.push({'dataContent': season[11], 'link': null});
      dataItem.push({'dataContent': season[12], 'link': null});
      dataItem.push({'dataContent': season[13], 'link': null});
      dataItem.push({'dataContent': season[14], 'link': null});
      dataItem.push({'dataContent': season[15], 'link': null});
      dataItem.push({'dataContent': season[16], 'link': null});
      dataItem.push({'dataContent': season[17], 'link': null});
      dataItem.push({'dataContent': season[18], 'link': null});
      dataItem.push({'dataContent': season[19], 'link': null});
      dataItem.push({'dataContent': season[20], 'link': null});
      dataItem.push({'dataContent': season[21], 'link': null});
      dataItem.push({'dataContent': season[22], 'link': null});
      dataItem.push({'dataContent': season[23], 'link': null});
      dataItem.push({'dataContent': season[24], 'link': null});
      dataItem.push({'dataContent': season[25], 'link': null});
      dataItem.push({'dataContent': season[26], 'link': null});
      tableData1.push(dataItem);
    });
    data.resultSets[2].rowSet.forEach((season) => {
      const dataItem = [];
      dataItem.push({'dataContent': season[1], 'link': `/players/${params.letter}/${params.id}/gamelog/${season[1]}`});
      dataItem.push({'dataContent': season[5], 'link': null});
      dataItem.push({'dataContent': season[4], 'link': `/teams/${teamRouter(season[4])}/${season[1]}`});
      dataItem.push({'dataContent': 'NBA', 'link': null});
      dataItem.push({'dataContent': season[6], 'link': null});
      dataItem.push({'dataContent': season[7], 'link': null});
      dataItem.push({'dataContent': season[8], 'link': null});
      dataItem.push({'dataContent': season[9], 'link': null});
      dataItem.push({'dataContent': season[10], 'link': null});
      dataItem.push({'dataContent': season[11], 'link': null});
      dataItem.push({'dataContent': season[12], 'link': null});
      dataItem.push({'dataContent': season[13], 'link': null});
      dataItem.push({'dataContent': season[14], 'link': null});
      dataItem.push({'dataContent': season[15], 'link': null});
      dataItem.push({'dataContent': season[16], 'link': null});
      dataItem.push({'dataContent': season[17], 'link': null});
      dataItem.push({'dataContent': season[18], 'link': null});
      dataItem.push({'dataContent': season[19], 'link': null});
      dataItem.push({'dataContent': season[20], 'link': null});
      dataItem.push({'dataContent': season[21], 'link': null});
      dataItem.push({'dataContent': season[22], 'link': null});
      dataItem.push({'dataContent': season[23], 'link': null});
      dataItem.push({'dataContent': season[24], 'link': null});
      dataItem.push({'dataContent': season[25], 'link': null});
      dataItem.push({'dataContent': season[26], 'link': null});
      tableData2.push(dataItem);
    });
    return(
        <div className="content">
          <PlayerBasicInfo/>
          <div className="data-selectors">
            <button onClick={() => setShowData('Regular Season')}>Regular Season</button>
            <button onClick={() => setShowData('Playoffs')}>Playoffs</button>
          </div>
          <div className="dataShow">
            <div className="regular-season show">
              {
                showData == 'Regular Season' ?
                <SortableTable headers = {headers} tableData = {tableData1} defaultIndex={0} defaultSort={false}/>
                :
                <SortableTable headers = {headers} tableData = {tableData2} defaultIndex={0} defaultSort={false}/>
              }
            </div>
          </div>
        </div>
      )
    }
}

export default PlayerBio;