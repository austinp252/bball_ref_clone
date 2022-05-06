import React, {useState, useEffect, Fragment} from 'react';

import {Link, useParams} from 'react-router-dom';

import getInitial from '../../../utils/getInitial';

import './PlayerGeneralSplits.css'

function PlayerGeneralSplits() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season general splits data")
      const res = await fetch(`/players/${params.letter}/${params.id}/season/${params.season}/splits`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, [params.season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      console.log(data)
    return(
      <div className="">
          <h3 className="table-header">{params.season} Splits</h3>
          <table className='split-table'>
            <thead>
              <tr className='split-table-header'>
                <td colspan='19'>Totals</td>
                <td colspan='3'>Shooting</td>
                <td colspan='5'>Advanced</td>
                <td colspan='4'>Per Game</td>
              </tr>
            </thead>
            <tbody>
              {
                data.data.map((split) => {
                  return(
                    <Fragment>
                      <tr className="split-header">
                        <td>Split</td>
                        <td>Value</td>
                        <td>G</td>
                        <td>MP</td>
                        <td>FG</td>
                        <td>FGA</td>
                        <td>3P</td>
                        <td>3PA</td>
                        <td>FT</td>
                        <td>FTA</td>
                        <td>ORB</td>
                        <td>DRB</td>
                        <td>TRB</td>
                        <td>AST</td>
                        <td>STL</td>
                        <td>BLK</td>
                        <td>TOV</td>
                        <td>PF</td>
                        <td>PTS</td>
                        <td>FG%</td>
                        <td>3P%</td>
                        <td>FT%</td>
                        <td>TS%</td>
                        <td>USG%</td>
                        <td>ORtg</td>
                        <td>DRtg</td>
                        <td>+/-</td>
                        <td>MP</td>
                        <td>PTS</td>
                        <td>TRB</td>
                        <td>AST</td>
                      </tr>
                      {
                        split.data.data.map((splitRow, index) => {
                          return(
                            <tr>
                              <td>{index === 0 ? split.title : ''}</td>
                              <td>{split.title==='Total' ? '' : splitRow[1]}</td>
                              <td>{splitRow[2]}</td>
                              <td>{splitRow[6].toFixed(0)}</td>
                              <td>{splitRow[7]}</td>
                              <td>{splitRow[8]}</td>
                              <td>{splitRow[10]}</td>
                              <td>{splitRow[11]}</td>
                              <td>{splitRow[13]}</td>
                              <td>{splitRow[14]}</td>
                              <td>{splitRow[16]}</td>
                              <td>{splitRow[17]}</td>
                              <td>{splitRow[18]}</td>
                              <td>{splitRow[19]}</td>
                              <td>{splitRow[21]}</td>
                              <td>{splitRow[22]}</td>
                              <td>{splitRow[20]}</td>
                              <td>{splitRow[24]}</td>
                              <td>{splitRow[26]}</td>
                              <td>{splitRow[9]}</td>
                              <td>{splitRow[12]}</td>
                              <td>{splitRow[15]}</td>
                              <td>--</td>
                              <td>--</td>
                              <td>--</td>
                              <td>--</td>
                              <td>{splitRow[27]}</td>
                              <td>{(splitRow[6]/splitRow[2]).toFixed(2)}</td>
                              <td>{(splitRow[26]/splitRow[2]).toFixed(2)}</td>
                              <td>{(splitRow[18]/splitRow[2]).toFixed(2)}</td>
                              <td>{(splitRow[19]/splitRow[2]).toFixed(2)}</td>
                            </tr>
                          )
                        })
                      }
                    </Fragment>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    )
  }
}

export default PlayerGeneralSplits;