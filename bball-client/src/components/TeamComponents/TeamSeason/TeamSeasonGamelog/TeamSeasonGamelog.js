import React, {useState, useEffect} from 'react';
import teamRouter from '../../../../utils/teamRouter';
import './TeamSeasonGamelog.css';

import TeamSeasonBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';
import SortableTable from '../../../SortableTable/SortableTable';
import {useParams} from 'react-router-dom';

function TeamSeasonGamelog() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        console.log('attempting to fetch')
        fetch(`/teams/${params.id}/${params.season}/games`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [params.id, params.season]);

    if(!data) {
        console.log('Loading');
        return(
            <div className="content">Loading...</div>
        )
    } else {
        const headers = [{'header':'G', 'type':'number'}, {'header':'Date', 'type':'date'}, {'header':'', 'type':'empty'}, {'header':'Tm', 'type':'string'}, {'header':'', 'type':'string'}, {'header':'Opp', 'type':'string'}, {'header':'Res', 'type':'string'}, {'header':'Tm', 'type':'number'}, {'header':'Opp', 'type':'empty'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}];
        const tableDataRegular = []
        const tableDataPlayoffs = []
        data.regular.data.slice(0).reverse().forEach((game, index) => {
            const dataItem = [];
            const teams = game[3].split(' ');
            dataItem.push({'dataContent': index+1, 'link': null});
            dataItem.push({'dataContent': game[2], 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': 'Box-Score', 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': teams[0], 'link': null});
            dataItem.push({'dataContent': teams[1] === '@' ? '@' : '', 'link': null});
            dataItem.push({'dataContent': teams[2], 'link': `/teams/${teamRouter(teams[2])}/${params.season}`});
            dataItem.push({'dataContent': game[4], 'link': null});
            dataItem.push({'dataContent': game[26], 'link': null});
            dataItem.push({'dataContent': 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[5]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[6]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[7]: 'N/A', 'link': null});
            tableDataRegular.push(dataItem);
        })
        data.playoffs.data.slice(0).reverse().forEach((game, index) => {
            const dataItem = [];
            const teams = game[3].split(' ');
            dataItem.push({'dataContent': index+1, 'link': null});
            dataItem.push({'dataContent': game[2], 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': 'Box-Score', 'link': `/scores/${game[1]}/boxscore`});
            dataItem.push({'dataContent': teams[0], 'link': null});
            dataItem.push({'dataContent': teams[1] === '@' ? '@' : '', 'link': null});
            dataItem.push({'dataContent': teams[2], 'link': `/teams/${teamRouter(teams[2])}/${params.season}`});
            dataItem.push({'dataContent': game[4], 'link': null});
            dataItem.push({'dataContent': game[26], 'link': null});
            dataItem.push({'dataContent': 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[5]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[6]: 'N/A', 'link': null});
            dataItem.push({'dataContent': parseInt(game[5])>=0 ? game[7]: 'N/A', 'link': null});
            tableDataPlayoffs.push(dataItem);
        })
        return(
            <div className="content">
                <div className="common">
                    <TeamSeasonBasicInfo textName="Gamelog"/>
                </div>
                <div className="dataShow">
                    <div className="regular-season">
                        <h2>{params.season} Regular Season</h2>
                        <SortableTable headers={headers} tableData={tableDataRegular} subHeadDiv={20} defaultIndex={0}/>
                    </div>
                    <div className="post-season">
                        <h2>{params.season} Post Season</h2>
                        <SortableTable headers={headers} tableData={tableDataPlayoffs} defaultIndex={0}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamSeasonGamelog;
