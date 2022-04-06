import React, {useState, useEffect, Fragment} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';
import './TeamSeasonGamelog.css';

import Dropdown from '../../widgets/Dropdown/Dropdown';
import TeamSeasonBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';
import SortableTable from '../../widgets/SortableTable/SortableTable';
import {Link, useParams} from 'react-router-dom';

function TeamSeasonGamelog() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        console.log('attempting to fetch')
        fetch(`/teams/${params.id}/${params.season}/games`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if(!data) {
        console.log('Loading');
        return(
            <div className="content">Loading...</div>
        )
    } else {
        const headers = [{'header':'G', 'type':'number'}, {'header':'Date', 'type':'empty'}, {'header':'', 'type':'empty'}, {'header':'Tm', 'type':'string'}, {'header':'', 'type':'string'}, {'header':'Opp', 'type':'string'}, {'header':'Res', 'type':'string'}, {'header':'Tm', 'type':'number'}, {'header':'Opp', 'type':'empty'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}];
        const tableData = []
        data.data.slice(0).reverse().forEach((game, index) => {
            const dataItem = [];
            const teams = game[3].split(' ');
            dataItem.push({'dataContent': index+1, 'link': null});
            dataItem.push({'dataContent': game[2], 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': 'Box-Score', 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': teams[0], 'link': null});
            dataItem.push({'dataContent': teams[1] == '@' ? '@' : '', 'link': null});
            dataItem.push({'dataContent': teams[2], 'link': `/teams/${teamRouter(teams[2])}/${params.season}`});
            dataItem.push({'dataContent': game[4], 'link': null});
            dataItem.push({'dataContent': game[26], 'link': null});
            dataItem.push({'dataContent': 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[5]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[6]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[7]: 'N/A', 'link': null});
            tableData.push(dataItem);
        })
        return(
            <div className="content">
                <div className="common">
                    <TeamSeasonBasicInfo textName="Gamelog"/>
                </div>
                <div className="games">
                    <SortableTable headers={headers} tableData={tableData}/>
                </div>
            </div>
        )
    }
}

export default TeamSeasonGamelog;
