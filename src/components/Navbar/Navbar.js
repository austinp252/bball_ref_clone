import React from 'react';
import './Navbar.css';

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
              <h3>Players</h3>
              <h3>Teams</h3>
              <h3>Seasons</h3>
              <h3>Leaders</h3>


          </div>
      </div>
  )
}

export default Navbar;
