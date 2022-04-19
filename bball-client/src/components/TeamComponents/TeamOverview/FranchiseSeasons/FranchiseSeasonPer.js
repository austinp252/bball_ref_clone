import React, {useState, useEffect} from 'react';
import './FranchiseSeasons.css';

import SortableTable from '../../../widgets/SortableTable/SortableTable';

function FranchiseSeasonPer(props) {
  const [data, setData] = useState(null);
  const teamID = props.teamID;
  const perMode = props.perMode;
  const measureMode = props.measureMode;
  const title = props.title;

  useEffect(() => {
      console.log('fetching franchise seasons');
      fetch(`/teams/${teamID}/${perMode}/${measureMode}/stats`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [props.teamID]);

  if(!data) {
    return(
      <p>Loading...</p>
    )
  } else {
      console.log(data);
    const headers = [{'header':'Season', 'type':'string'}, {'header':'Lg', 'type':'empty'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'G', 'type':'number'}, {'header':'MP', 'type':'number'}, {'header':'FG', 'type':'number'}, {'header':'FGA', 'type':'number'}, {'header':'FG%', 'type':'number'}, {'header':'3P', 'type':'number'}, {'header':'3PA', 'type':'number'}, {'header':'3P%', 'type':'number'}, {'header':'FT', 'type':'number'}, {'header':'FTA', 'type':'number'}, {'header':'FTA%', 'type':'number'}, {'header':'ORB', 'type':'number'}, {'header':'DRB', 'type':'number'}, {'header':'TRB', 'type':'number'}, {'header':'AST', 'type':'number'}, {'header':'STL', 'type':'number'}, {'header':'BLK', 'type':'number'}, {'header':'TOV', 'type':'number'}, {'header':'PF', 'type':'number'}, {'header':'PTS', 'type':'number'}]
    const tableData = []
    data.data.slice(0).reverse().forEach((season, index) => {
      const dataItem = [];
      dataItem.push({'dataContent': season[1], 'link': `/teams/${teamID}/${season[1]}`});
      dataItem.push({'dataContent': 'NBA', 'link': null});
      dataItem.push({'dataContent': season[3], 'link': null});
      dataItem.push({'dataContent': season[4], 'link': null});
      dataItem.push({'dataContent': season[2], 'link': null});
      dataItem.push({'dataContent': season[6].toFixed(0)*5, 'link': null});
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
      dataItem.push({'dataContent': season[21], 'link': null});
      dataItem.push({'dataContent': season[22], 'link': null});
      dataItem.push({'dataContent': season[20], 'link': null});
      dataItem.push({'dataContent': season[24], 'link': null});
      dataItem.push({'dataContent': season[26], 'link': null});
      
      tableData.push(dataItem);
    })
    return(
      <div className="stat-table">
        <h3 className="table-header">{data.data.length} NBA Seasons</h3>
        <div className="dataShow">
          <SortableTable headers={headers} tableData={tableData} defaultIndex={0} defaultSort={true} subHeadDiv={20}/>
        </div>
      </div>
    )
  }
}

export default FranchiseSeasonPer;