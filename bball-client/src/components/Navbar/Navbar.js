import React from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom';

function Navbar() {
  return(
      <div className="navbar">
          <div className="search">
            <div className="logo">
                placeholder              
            </div>
            <div className="searchbar">
                <form action="" id="getPlayers">
                    <input type="text" placeholder="Enter Person, Team, Section, etc"/>
                </form>
                <button type="submit">Submit</button>
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
          </div>
      </div>
  )
}

export default Navbar;
