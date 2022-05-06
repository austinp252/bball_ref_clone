import React, {useState, useEffect} from 'react';
import './FranchiseSeasons.css';

import SortableTable from '../../../SortableTable/SortableTable';

function FranchiseSeasonPer(props) {
  const [data, setData] = useState(null);
  const teamID = props.teamID;
  const perMode = props.perMode;
  const measureMode = props.measureMode;
  const rank = props.hideRank;
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
      dataItem.push({'dataContent': rank ? season[3] : season[29], 'link': null});
      dataItem.push({'dataContent': rank ? season[4] : season[30], 'link': null});
      dataItem.push({'dataContent': rank ? season[2] : season[28], 'link': null});
      dataItem.push({'dataContent': rank ? season[6].toFixed(0)*5 : season[32], 'link': null});
      dataItem.push({'dataContent': rank ? season[7] : season[33], 'link': null});
      dataItem.push({'dataContent': rank ? season[8] : season[34], 'link': null});
      dataItem.push({'dataContent': rank ? season[9] : season[35], 'link': null});
      dataItem.push({'dataContent': rank ? season[10] : season[36], 'link': null});
      dataItem.push({'dataContent': rank ? season[11] : season[37], 'link': null});
      dataItem.push({'dataContent': rank ? season[12] : season[38], 'link': null});
      dataItem.push({'dataContent': rank ? season[13] : season[39], 'link': null});
      dataItem.push({'dataContent': rank ? season[14] : season[40], 'link': null});
      dataItem.push({'dataContent': rank ? season[15] : season[41], 'link': null});
      dataItem.push({'dataContent': rank ? season[16] : season[42], 'link': null});
      dataItem.push({'dataContent': rank ? season[17] : season[43], 'link': null});
      dataItem.push({'dataContent': rank ? season[18] : season[44], 'link': null});
      dataItem.push({'dataContent': rank ? season[19] : season[45], 'link': null});
      dataItem.push({'dataContent': rank ? season[21] : season[47], 'link': null});
      dataItem.push({'dataContent': rank ? season[22] : season[48], 'link': null});
      dataItem.push({'dataContent': rank ? season[20] : season[46], 'link': null});
      dataItem.push({'dataContent': rank ? season[24] : season[50], 'link': null});
      dataItem.push({'dataContent': rank ? season[26] : season[52], 'link': null});
      
      tableData.push(dataItem);
    })
    return(
      <div className="stat-table">
        <h3 className="table-header">{title}{data.data.length} NBA Seasons</h3>
        <div className="dataShow">
          <SortableTable headers={headers} tableData={tableData} defaultIndex={0} defaultSort={true} subHeadDiv={20}/>
        </div>
      </div>
    )
  }
}

export default FranchiseSeasonPer;