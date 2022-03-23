import React, {useState, useEffect} from 'react';
import './TeamsIndex.css';

import {Link} from 'react-router-dom';

function TeamsIndex() {

    const [data, setData] = useState([]);
    var activeID = -1;

    useEffect(() => {
        fetch('/api/teams')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return(
        <div class="content">
            <h1>NBA Franchise Index</h1>
            <div class="index-active">
                <h2>Active Franchises</h2>
                <div class="data-active">
                    <table>
                        <thead>
                            <tr>
                                <th>Franchise</th>
                                <th>Lg</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Yrs</th>
                                <th>G</th>
                                <th>W</th>
                                <th>L</th>
                                <th>W/L%</th>
                                <th>Plyfs</th>
                                <th>Div</th>
                                <th>Conf</th>
                                <th>Champ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.data?.map((franchise) => {
                                    //console.log(franchise);
                                    let iscurrent = false;
                                    if(activeID != franchise[1]) {
                                        activeID = franchise[1] //reset for each new active team
                                        iscurrent = true; //can only occur once per active team
                                    }
                                    return(
                                        <tr>
                                            <td class={iscurrent ? 'current name' : 'name'}>
                                                {iscurrent ? <Link class='link' to={`/teams/${franchise[1]}`}>{franchise[2]} {franchise[3]}</Link> : `${franchise[2]} ${franchise[3]}`}
                                            </td>
                                            <td class={iscurrent ? 'current' : ''}>NBA</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[4]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[5]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[6]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[7]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[8]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[9]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[10]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[11]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[12]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[13]}</td>
                                            <td class={iscurrent ? 'current' : ''}>{franchise[14]}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeamsIndex;
