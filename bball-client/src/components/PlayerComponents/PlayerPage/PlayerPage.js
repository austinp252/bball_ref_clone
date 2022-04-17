import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';
import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function PlayerPage() {
  const [data, setData] = useState(null);
  const params = useParams();
  const lastInitial = params.letter;
  const playerID = params.id;


  useEffect(() => {
    console.log("rendering player front page")
}, []);

    return(
        <div className="content">
          <PlayerBasicInfo lastInitial={lastInitial} playerID={playerID}/>
        </div>
      )
}

export default PlayerPage;