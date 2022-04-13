import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function Leaders() {
    return(
      <div className="content">
          <h3>Regular Season Leaders</h3>
          <div className="regular-season-leaders">
              <table>
                  <tbody>
                      <tr>
                          <th colspan='2'>Totals</th>
                      </tr>
                      <tr>
                          <td>Games</td>
                          <td><Link to='/leaders/career/regular/GP'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goals</td>
                          <td><Link to='/leaders/career/regular/fg'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goal Attempts</td>
                          <td><Link to='/leaders/career/regular/fga'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goals</td>
                          <td><Link to='/leaders/career/regular/3p'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goal Attempts</td>
                          <td><Link to='/leaders/career/regular/3pa'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throws</td>
                          <td><Link to='/leaders/career/regular/ft'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throw Attempts</td>
                          <td><Link to='/leaders/career/regular/fta'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Offensive Rebounds</td>
                          <td><Link to='/leaders/career/regular/oreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Defensive Rebounds</td>
                          <td><Link to='/leaders/career/regular/dreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Total Rebounds</td>
                          <td><Link to='/leaders/career/regular/reb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Assists</td>
                          <td><Link to='/leaders/career/regular/ast'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Steals</td>
                          <td><Link to='/leaders/career/regular/stl'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Blocks</td>
                          <td><Link to='/leaders/career/regular/blk'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Turnovers</td>
                          <td><Link to='/leaders/career/regular/tov'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Personal Fouls</td>
                          <td><Link to='/leaders/career/regular/pf'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Points</td>
                          <td><Link to='/leaders/career/regular/pts'>Career</Link></td>
                      </tr>
                      <tr>
                          <th colspan='2'>Shooting</th>
                      </tr>
                      <tr>
                          <td>Field Goal Pct</td>
                          <td><Link to='/leaders/career/regular/fg_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goal Pct</td>
                          <td><Link to='/leaders/career/regular/3fg_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throw Pct</td>
                          <td><Link to='/leaders/career/regular/ft_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <th colspan='2'>Per Game</th>
                      </tr>
                      <tr>
                          <td>Points Per Game</td>
                          <td><Link to='/leaders/career/regular/per_pts'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Rebounds Per Game</td>
                          <td><Link to='/leaders/career/regular/per_reb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Assists Per Game</td>
                          <td><Link to='/leaders/career/regular/per_ast'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Steals Per Game</td>
                          <td><Link to='/leaders/career/regular/per_stl'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Blocks Per Game</td>
                          <td><Link to='/leaders/career/regular/per_blk'>Career</Link></td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <h3>Playoffs Leaders</h3>
          <div className="post-season-leaders">
              <table>
                  <tbody>
                      <tr>
                          <th colspan='2'>Totals</th>
                      </tr>
                      <tr>
                          <td>Games</td>
                          <td><Link to='/leaders/career/playoffs/GP'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goals</td>
                          <td><Link to='/leaders/career/playoffs/fg'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goal Attempts</td>
                          <td><Link to='/leaders/career/playoffs/fga'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goals</td>
                          <td><Link to='/leaders/career/playoffs/3p'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goal Attempts</td>
                          <td><Link to='/leaders/career/playoffs/3pa'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throws</td>
                          <td><Link to='/leaders/career/playoffs/ft'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throw Attempts</td>
                          <td><Link to='/leaders/career/playoffs/fta'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Offensive Rebounds</td>
                          <td><Link to='/leaders/career/playoffs/oreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Defensive Rebounds</td>
                          <td><Link to='/leaders/career/playoffs/dreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Total Rebounds</td>
                          <td><Link to='/leaders/career/playoffs/reb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Assists</td>
                          <td><Link to='/leaders/career/playoffs/ast'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Steals</td>
                          <td><Link to='/leaders/career/playoffs/stl'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Blocks</td>
                          <td><Link to='/leaders/career/playoffs/blk'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Turnovers</td>
                          <td><Link to='/leaders/career/playoffs/tov'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Personal Fouls</td>
                          <td><Link to='/leaders/career/playoffs/pf'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Points</td>
                          <td><Link to='/leaders/career/playoffs/pts'>Career</Link></td>
                      </tr>
                      <tr>
                          <th colspan='2'>Shooting</th>
                      </tr>
                      <tr>
                          <td>Field Goal Pct</td>
                          <td><Link to='/leaders/career/playoffs/fg_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goal Pct</td>
                          <td><Link to='/leaders/career/playoffs/3fg_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throw Pct</td>
                          <td><Link to='/leaders/career/playoffs/ft_pct'>Career</Link></td>
                      </tr>
                      <tr>
                          <th colspan='2'>Per Game</th>
                      </tr>
                      <tr>
                          <td>Points Per Game</td>
                          <td><Link to='/leaders/career/playoffs/per_pts'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Rebounds Per Game</td>
                          <td><Link to='/leaders/career/playoffs/per_reb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Assists Per Game</td>
                          <td><Link to='/leaders/career/playoffs/per_ast'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Steals Per Game</td>
                          <td><Link to='/leaders/career/playoffs/per_stl'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Blocks Per Game</td>
                          <td><Link to='/leaders/career/playoffs/per_blk'>Career</Link></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    )
}

export default Leaders;