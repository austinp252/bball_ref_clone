import React, {useState, useEffect} from 'react';
import './SearchResults.css';

import Dropdown from '../widgets/Dropdown/Dropdown';

import {Link, useParams} from 'react-router-dom';

function SearchResults() {
    const [data, setData] = useState(null)
    const [showData, setShowData] = useState('Players');
    const params = useParams();

    useEffect(() => {
        console.log('rendering');
        console.log(params);
        fetch(`/api/search/${params.term}/${params.page}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [params]);

    if(!data) {
        return(
            <div className="content">Loading...</div>
        )
    } else {
        console.log(data);
        return(
            <div className="content">
                <h1>Search Results</h1>
                <div className="selectors">
                    <button className={data.dataSize[0] > 0 ? 'players show' : 'players hide'} onClick={() => setShowData('Players')}>Players ({data.dataSize[0]})</button>
                    <button className={data.dataSize[1] > 0 ? 'teams show' : 'teams hide'} onClick={() => setShowData('Teams')}>Teams ({data.dataSize[1]})</button>
                </div>
                <div className="results-show">
                    <h3>{showData}</h3>
                    <div className={data.dataSize[0] > 0 ? 'players show' : 'players hide'}>
                    <Link to={`/search/${params.term}/${parseInt(params.page)-1}`}><button className={(params.page > 0 && showData == 'Players') ? 'btn show' : 'btn hide'}>Previous 100 Results</button></Link>
                        <Link to={`/search/${params.term}/${parseInt(params.page)+1}`}><button className={((data.dataSize[0] > (params.page+1)*100) && showData == 'Players') ? 'btn show' : 'btn hide'}>Next 100 Results</button></Link>
                        {
                            showData == 'Players' ?
                            data.playerData.map((player) => {
                                return(
                                    <div className="infoCard">
                                        <h4><Link to={`/players/${player.last_name[0]}/${player.id}`}>{player.full_name}</Link></h4>
                                        <h6>{`/players/${player.last_name[0]}/${player.id}`}</h6>
                                        <h6>{player.is_active ? "Active" : "Inactive"}</h6>
                                    </div>
                                )
                            })
                            : null
                        }
                        <Link to={`/search/${params.term}/${parseInt(params.page)-1}`}><button className={(params.page > 0 && showData == 'Players') ? 'btn show' : 'btn hide'}>Previous 100 Results</button></Link>
                        <Link to={`/search/${params.term}/${parseInt(params.page)+1}`}><button className={((data.dataSize[0] > (params.page+1)*100) && showData == 'Players') ? 'btn show' : 'btn hide'}>Next 100 Results</button></Link>
                    </div>
                    <div className={data.dataSize[1] > 0 ? 'teams show' : 'teams hide'}>
                        {
                            showData == 'Teams' ?
                            data.teamData.map((team) => {
                                return(
                                    <div className="infoCard">
                                        <h4><Link to={`/teams/${team.id}`}>{team.full_name}</Link></h4>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;
