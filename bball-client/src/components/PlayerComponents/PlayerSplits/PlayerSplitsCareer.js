import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

import './PlayerSplitsCareer.css'

function PlayerSplitsCareer(props) {
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState('Regular Season')
  const params = useParams();
  const lastInitial = props.lastInitial;
  const playerID = props.playerID;
  const perMode = props.perMode;
  const title = props.title;

  useEffect(() => {
    console.log("fetching player career stats")
    fetch(`/players/${lastInitial}/${playerID}/${perMode}/splits`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, [props.playerID]);

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
      dataItem.push({'dataContent': season[1], 'link': `/players/${lastInitial}/${playerID}/gamelog/${season[1]}`});
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
      dataItem.push({'dataContent': season[1], 'link': `/players/${lastInitial}/${playerID}/gamelog/${season[1]}`});
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
        <div className="stat-table">
            <h3 className="table-header">{title}</h3>
          <div className="data-selectors">
            <button className={showData==='Regular Season' ? 'active' : ''} onClick={() => setShowData('Regular Season')}>Regular Season</button>
            <button className={showData==='Playoffs' ? 'active' : ''} onClick={() => setShowData('Playoffs')}>Playoffs</button>
          </div>
          <div className="dataShow">
            <div className="regular-season show">
              {
                showData == 'Regular Season' ?
                <SortableTable headers = {headers} tableData = {tableData1} defaultIndex={0}/>
                :
                <SortableTable headers = {headers} tableData = {tableData2} defaultIndex={0}/>
              }
            </div>
          </div>
        </div>
      )
    }
}

export default PlayerSplitsCareer;