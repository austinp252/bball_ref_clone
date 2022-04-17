import React, {useState, useEffect} from 'react';
import './FranchiseBio.css';

import FranchiseBasicInfo from '../FranchiseBasicInfo/FranchiseBasicInfo';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function FranchiseBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
      fetch(`/teams/${params.id}/stats`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //window.scrollTo(0,0);
    console.log('rendering');
    const headers = [{'header':'Season', 'type':'string'}, {'header':'Lg', 'type':'empty'}, {'header':'Team', 'type':'string'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}, {'header':'Finish', 'type':'string'}]
    const tableData = []
    data.stats.data.slice(0).reverse().forEach((season, index) => {
      const dataItem = [];
      dataItem.push({'dataContent': season[3], 'link': `/teams/${params.id}/${season[3]}`});
      dataItem.push({'dataContent': 'NBA', 'link': null});
      dataItem.push({'dataContent': season[1] + ' ' + season[2], 'link': null});
      dataItem.push({'dataContent': season[5], 'link': null});
      dataItem.push({'dataContent': season[6], 'link': null});
      dataItem.push({'dataContent': season[7], 'link': null});
      dataItem.push({'dataContent': season[8] != '0' ? season[8] : 'N/A', 'link': null});
      tableData.push(dataItem);
    })
    return(
      <div className="content">
        <div className="common">
          <FranchiseBasicInfo/>
        </div>
        <div className="dataShow">
          <h1>Last {data.stats.data.length} NBA Seasons</h1>
          <SortableTable headers={headers} tableData={tableData} defaultIndex={0} defaultSort={true}/>
        </div>
      </div>
    )
  }
}

export default FranchiseBio;

/*
- Team Name - h1
- Location (City, State/Country)
- Seasons: (num) (range of years)
- Record: (W-L) (W/L%)
- Playoff appearances: 
- Championships
*/
