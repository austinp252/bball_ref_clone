import React, {useState, useEffect} from 'react';

import {Link, useParams} from 'react-router-dom';

function Footer() {
  return(
      <div className="footer-content">
          <h2>Full Site Menu</h2>
          <hr />
          <div className="players">
              <h3>Players</h3>
              <h4>In the news:</h4>
              <h4>All-Time Greats:</h4>
              <h4>Active Greats:</h4>
          </div>
          <hr />
          <div className="teams">
              <h3>Teams</h3>
              <h4>Atlantic:&nbsp;
                <Link className='link' to={`/teams/1610612761`}>Toronto</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612738`}>Boston</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612752`}>New York</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612751`}>Brooklyn</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612755`}>Philadelphia</Link>
              </h4>
              <h4>Central: &nbsp;
                <Link className='link' to={`/teams/1610612739`}>Cleveland</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612754`}>Indiana</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612765`}>Detroit</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612741`}>Chicago</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612749`}>Milwaukee</Link>
              </h4>
              <h4>Southeast: &nbsp;
                <Link className='link' to={`/teams/1610612748`}>Miami</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612737`}>Atlanta</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612766`}>Charlotte</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612764`}>Washington</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612753`}>Orlando</Link></h4>
              <h4>Northwest: &nbsp;
                <Link className='link' to={`/teams/1610612760`}>Oklahoma City</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612757`}>Portland</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612762`}>Utah</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612743`}>Denver</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612750`}>Minnesota</Link></h4>
              <h4>Pacific: &nbsp;
                <Link className='link' to={`/teams/1610612744`}>Golden State</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612746`}>Los Angeles Clippers</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612758`}>Sacramento</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612756`}>Phoenix</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612747`}>Los Angeles Lakers</Link></h4>
              <h4>Southwest: &nbsp;
                <Link className='link' to={`/teams/1610612759`}>San Antonio</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612742`}>Dallas</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612763`}>Memphis</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612745`}>Houston</Link>,&nbsp;
                <Link className='link' to={`/teams/1610612740`}>New Orleans</Link></h4>
          </div>
          <hr />
      </div>
  )
}

export default Footer