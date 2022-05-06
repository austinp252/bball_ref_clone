import React, {useState, useEffect} from 'react';
import './FranchiseSeasons.css';

import SortableTable from '../../../SortableTable/SortableTable';

function FranchiseSeasons(props) {
  const [data, setData] = useState(null);
  const teamID = props.teamID;
  const perMode = props.perMode;
  const title = props.title;

  useEffect(() => {
      console.log('fetching franchise seasons');
      fetch(`/teams/${teamID}/stats`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [props.teamID]);

  if(!data) {
    return(
      <p>Loading...</p>
    )
  } else {
    console.log('rendering');
    const headers = [{'header':'Season', 'type':'string'}, {'header':'Lg', 'type':'empty'}, {'header':'Team', 'type':'string'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}, {'header':'Finish', 'type':'string'}]
    const tableData = []
    data.stats.data.slice(0).reverse().forEach((season, index) => {
      const dataItem = [];
      dataItem.push({'dataContent': season[3], 'link': `/teams/${teamID}/${season[3]}`});
      dataItem.push({'dataContent': 'NBA', 'link': null});
      dataItem.push({'dataContent': season[1] + ' ' + season[2], 'link': null});
      dataItem.push({'dataContent': season[5], 'link': null});
      dataItem.push({'dataContent': season[6], 'link': null});
      dataItem.push({'dataContent': season[7], 'link': null});
      dataItem.push({'dataContent': season[8] != '0' ? season[8] : 'N/A', 'link': null});
      tableData.push(dataItem);
    })
    return(
      <div className="stat-table">
        <h3 className="table-header">{data.stats.data.length} NBA Seasons</h3>
        <div className="dataShow">
          <SortableTable headers={headers} tableData={tableData} defaultIndex={0} defaultSort={true}/>
        </div>
      </div>
    )
  }
}

export default FranchiseSeasons;

/*
- Team Name - h1
- Location (City, State/Country)
- Seasons: (num) (range of years)
- Record: (W-L) (W/L%)
- Playoff appearances: 
- Championships
*/
