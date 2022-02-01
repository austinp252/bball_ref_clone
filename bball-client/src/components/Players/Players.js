import React, {useState, useEffect} from 'react';
import './Players.css';



function Players() {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState('A');

  useEffect(() => {
    //console.log('test');
    fetch(`/test/:${index}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [index]);

  return <div>
      <h1>NBA Player Directory</h1>
      <div className="index">
          <h2>Index of Letters</h2>
          <div className="list">
            <h2 value='A' className={index === 'A' ? 'active' : ''} onClick={() => setIndex('A')}>A</h2>
            <h2 value='B' className={index === 'B' ? 'active' : ''} onClick={() => setIndex('B')}>B</h2>
            <h2 value='C' className={index === 'C' ? 'active' : ''} onClick={() => setIndex('C')}>C</h2>
            <h2 value='D' clDssName={index === 'D' ? 'active' : ''} onClick={() => setIndex('D')}>D</h2>
            <h2 value='E' className={index === 'E' ? 'active' : ''} onClick={() => setIndex('E')}>E</h2>
            <h2 value='F' className={index === 'F' ? 'active' : ''} onClick={() => setIndex('F')}>F</h2>
            <h2 value='G' className={index === 'G' ? 'active' : ''} onClick={() => setIndex('G')}>G</h2>
            <h2 value='H' className={index === 'H' ? 'active' : ''} onClick={() => setIndex('H')}>H</h2>
            <h2 value='I' className={index === 'I' ? 'active' : ''} onClick={() => setIndex('I')}>I</h2>
            <h2 value='J' className={index === 'J' ? 'active' : ''} onClick={() => setIndex('J')}>J</h2>
            <h2 value='K' className={index === 'K' ? 'active' : ''} onClick={() => setIndex('K')}>K</h2>
            <h2 value='L' className={index === 'L' ? 'active' : ''} onClick={() => setIndex('L')}>L</h2>
            <h2 value='M' className={index === 'M' ? 'active' : ''} onClick={() => setIndex('M')}>M</h2>
            <h2 value='N' className={index === 'N' ? 'active' : ''} onClick={() => setIndex('N')}>N</h2>
            <h2 value='O' className={index === 'O' ? 'active' : ''} onClick={() => setIndex('O')}>O</h2>
            <h2 value='P' className={index === 'P' ? 'active' : ''} onClick={() => setIndex('P')}>P</h2>
            <h2 value='Q' className={index === 'Q' ? 'active' : ''} onClick={() => setIndex('Q')}>Q</h2>
            <h2 value='R' className={index === 'R' ? 'active' : ''} onClick={() => setIndex('R')}>R</h2>
            <h2 value='S' className={index === 'S' ? 'active' : ''} onClick={() => setIndex('S')}>S</h2>
            <h2 value='T' className={index === 'T' ? 'active' : ''} onClick={() => setIndex('T')}>T</h2>
            <h2 value='U' className={index === 'U' ? 'active' : ''} onClick={() => setIndex('U')}>U</h2>
            <h2 value='V' className={index === 'V' ? 'active' : ''} onClick={() => setIndex('V')}>V</h2>
            <h2 value='W' className={index === 'W' ? 'active' : ''} onClick={() => setIndex('W')}>W</h2>
            <h2 value='X' className={index === 'X' ? 'active' : ''} onClick={() => setIndex('X')}>X</h2>
            <h2 value='Y' className={index === 'Y' ? 'active' : ''} onClick={() => setIndex('Y')}>Y</h2>
            <h2 value='Z' className={index === 'Z' ? 'active' : ''} onClick={() => setIndex('Z')}>Z</h2>
          </div>
      </div>
      <div className="data">
        {
        data.map((player) => {
          return(
            <h1>{player.full_name}</h1>
          )
        })
      }
      </div>
  </div>;
}

export default Players;

/*
- Should eventually include hover feature
<h2>D</h2>
            <h2>E</h2>
            <h2>F</h2>
            <h2>G</h2>
            <h2>H</h2>
            <h2>I</h2>
            <h2>J</h2>
            <h2>K</h2>
            <h2>L</h2>
            <h2>M</h2>
            <h2>N</h2>
            <h2>O</h2>
            <h2>P</h2>
            <h2>Q</h2>
            <h2>R</h2>
            <h2>S</h2>
            <h2>T</h2>
            <h2>U</h2>
            <h2>V</h2>
            <h2>W</h2>
            <h2>X</h2>
            <h2>Y</h2>
            <h2>Z</h2>
*/
