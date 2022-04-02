import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import './Home.css';
import SortableTable from '../../widgets/SortableTable/SortableTable';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //console.log('test');
    fetch(`/players/A/203500/stats`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const headers = [{'header': 'Season', 'type': 'string'}, {'header': 'Age', 'type': 'number'}, {'header': 'Team', 'type': 'string'}];

  if(!data) {
    return(
      <div>
        test
      </div>
    )
  } else{
    console.log(data)
    //const tableData = [{'data': data.resultSets[0].rowSet, 'data-items': {'item-content':'test', 'item-route': null}}]
    //const tableData = {'data': data.resultSets[0].rowSet, 'dataItems': {'item': 'test', 'item-route': null}}
    const tableData = []
    data.resultSets[0].rowSet.forEach((season) => {
      const dataItem = []
      dataItem.push({'dataContent': season[1], 'link': `/players/A/203500/gamelog/${season[1]}`});
      dataItem.push({'dataContent': season[5], 'link': null});
      dataItem.push({'dataContent': season[4], 'link': null});
      tableData.push(dataItem);
    })
    return(
      <div className="home-container">
          <div className="home">
              <h1>
                  <SortableTable headers={headers} tableData={tableData}/>
              </h1>
          </div>
      </div>
    );
  }
}

export default Home;


