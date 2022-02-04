import React, {useState, useEffect, useRef} from 'react';
import propTypes from 'prop-types';
import './Dropdown.css';

function Dropdown(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [pick, setPick] = useState(props.value);

    const onClick = () => {
        console.log('clicked!');
        setIsActive(!isActive);
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        }

        if(isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);
    
  return(
      <div className="dropdown">
          <button onClick={onClick} className="dropdown-btn">
                <span>{pick}</span>
          </button>
          <nav ref={dropdownRef} className={`selector ${isActive ? 'active': 'inactive'}`}>
            <ul>
                {
                    props.selections.map((selection) => {
                        let isSelected = (props.value === selection);
                        return(
                            <li><a key={selection} onClick={onClick} className={isSelected ? 'selected' : ''}>{selection}</a></li>
                        );
                    })
                }
            </ul>
          </nav>
      </div>
  )
}

export default Dropdown;
