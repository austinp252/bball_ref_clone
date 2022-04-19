import React, {useState, useEffect} from 'react';
import './TeamSeasonRoster.css';

import TeamSeasonBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';

import SortableTable from '../../../widgets/SortableTable/SortableTable';
import getInitial from '../../../widgets/Helpers/getInitial';

import {Link, useParams} from 'react-router-dom';

function TeamSeasonRoster() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`/teams/${params.id}/${params.season}/stats`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if(!data) {
        console.log('loading...');
        return(
            <p>Loading...</p>
        )
    } else {
        const headersRoster = [{'header':'No.', 'type':'empty'}, {'header':'Player', 'type':'name'}, {'header':'Pos', 'type':'empty'}, {'header':'Ht', 'type':'empty'}, {'header':'Wt', 'type':'empty'}, {'header':'Birth Date', 'type':'empty'}, {'header':'Exp', 'type':'empty'}, {'header':'College', 'type':'empty'}];
        const headersPER = [{'header':'Player', 'type':'name'}, {'header':'Age', 'type':'empty'}, {'header':'G', 'type':'number'}, {'header':'GS', 'type':'empty'}, {'header':'MP', 'type':'number'}, {'header':'FG', 'type':'number'}, {'header':'FGA', 'type':'number'}, {'header':'FG%', 'type':'number'}, {'header':'3PM', 'type':'number'}, {'header':'3PA', 'type':'number'}, {'header':'3P%', 'type':'number'}, {'header':'FTM', 'type':'number'}, {'header':'FTA', 'type':'number'}, {'header':'FT%', 'type':'number'}, {'header':'OREB', 'type':'number'}, {'header':'DREB', 'type':'number'}, {'header':'REB', 'type':'number'}, {'header':'AST', 'type':'number'}, {'header':'STL', 'type':'number'}, {'header':'BLK', 'type':'number'}, {'header':'TOV', 'type':'number'}, {'header':'PF', 'type':'number'}, {'header':'PTS', 'type':'number'}];
        const tableDataRoster = []
        const tableDataPER = []
        data.resultSets[1].rowSet.forEach((player) => {
            const dataItem = [];
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': player[2], 'link': `/players/${getInitial(player[2])}/${player[1]}/overview`});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            tableDataRoster.push(dataItem);
        })
        data.resultSets[1].rowSet.forEach((player) => {
            const dataItem = [];
            dataItem.push({'dataContent': player[2], 'link': `/players/${getInitial(player[2])}/${player[1]}`});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': player[4], 'link': null});
            dataItem.push({'dataContent': '--', 'link': null});
            dataItem.push({'dataContent': player[8], 'link': null});
            dataItem.push({'dataContent': player[9], 'link': null});
            dataItem.push({'dataContent': player[10], 'link': null});
            dataItem.push({'dataContent': player[11], 'link': null});
            dataItem.push({'dataContent': player[12], 'link': null});
            dataItem.push({'dataContent': player[13], 'link': null});
            dataItem.push({'dataContent': player[14], 'link': null});
            dataItem.push({'dataContent': player[15], 'link': null});
            dataItem.push({'dataContent': player[16], 'link': null});
            dataItem.push({'dataContent': player[17], 'link': null});
            dataItem.push({'dataContent': player[18], 'link': null});
            dataItem.push({'dataContent': player[19], 'link': null});
            dataItem.push({'dataContent': player[20], 'link': null});
            dataItem.push({'dataContent': player[21], 'link': null});
            dataItem.push({'dataContent': player[23], 'link': null});
            dataItem.push({'dataContent': player[24], 'link': null});
            dataItem.push({'dataContent': player[22], 'link': null});
            dataItem.push({'dataContent': player[26], 'link': null});
            dataItem.push({'dataContent': player[28], 'link': null});
            tableDataPER.push(dataItem);
        })
        return(
            <div className="content">
                <div className="common">
                    <TeamSeasonBasicInfo textName="Roster & Stats"/>
                </div>
                <div className="roster">
                    <h3>Roster</h3>
                    <SortableTable headers={headersRoster} tableData={tableDataRoster} defaultIndex={1} defaultSort={true}/>
                </div>
                <div className="perGame">
                    <h3>Per Game</h3>
                    <SortableTable headers={headersPER} tableData={tableDataPER} defaultIndex={22} defaultSort={true} showRank={true}/>
                </div>
            </div>
        )
    }
}

export default TeamSeasonRoster;
