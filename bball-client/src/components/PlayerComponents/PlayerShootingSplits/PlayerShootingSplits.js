import React, {useState, useEffect, Fragment} from 'react';

import {useParams} from 'react-router-dom';

// import getInitial from '../../../utils/getInitial';

import '../PlayerGeneralSplits/PlayerGeneralSplits.css'

function PlayerShootingSplits() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season general splits data")
      const res = await fetch(`/players/${params.letter}/${params.id}/season/${params.season}/shootingSplits`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, [params.id, params.letter, params.season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      console.log(data)
    return(
      <div className="">
          <h3 className="table-header">{params.season} Shooting Splits</h3>
          <table className='split-table'>
            <tbody>
              {
                data.data.map((split) => {
                  return(
                    <Fragment>
                      <tr className="split-header">
                        <td>Split</td>
                        <td>Value</td>
                        <td>FG</td>
                        <td>FGA</td>
                        <td>FG%</td>
                        <td>3P</td>
                        <td>3PA</td>
                        <td>3P%</td>
                        <td>eFG%</td>
                        <td>%Ast</td>
                      </tr>
                      {
                        split.data.data.map((splitRow, index) => {
                          return(
                            <tr>
                              <td>{index === 0 ? split.title : ''}</td>
                              <td>{splitRow[1]}</td>
                              <td>{splitRow[2]}</td>
                              <td>{splitRow[3]}</td>
                              <td>{splitRow[4]}</td>
                              <td>{splitRow[5]}</td>
                              <td>{splitRow[6]}</td>
                              <td>{splitRow[7]}</td>
                              <td>{splitRow[8]}</td>
                              <td>{splitRow[14]}</td>
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

export default PlayerShootingSplits;