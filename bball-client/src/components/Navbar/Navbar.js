import React, {useState, useEffect} from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

function Navbar() {
    const [term, setTerm] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setTerm(e.target.value == ''? 'xxx' : e.target.value);
    }

    return(
        <div className="navbar">
            <div className="search">
                <div className="logo">
                    placeholder              
                </div>
                <div className="searchbar">
                    <form action="" id="getPlayers" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Person, Team, Section, etc" onChange={handleChange}/>
                        <Link to={`/search/${term ? term : 'xxx'}/0`}><button type="submit">Submit</button></Link>
                   </form>
                </div>
            </div>
            <div className="menu">
                <h2>
                    <Link className='link' to={'/'}>Home</Link>
                </h2>
                <h2>
                    <Link className='link' to={'/players'}>Players</Link>
                </h2>
                <h2>
                    <Link className='link' to={'/teams'}>Teams</Link>
                </h2>
                <h2>
                    <Link className='link' to={'/seasons'}>Seasons</Link>
                </h2>
                <h2>
                    <Link className='link' to={'/leaders'}>Leaders</Link>
                </h2>
                <h2>
                    <Link className='link' to={'/scores'}>Scores</Link>
                </h2>
            </div>
        </div>
    )
}

export default Navbar;
