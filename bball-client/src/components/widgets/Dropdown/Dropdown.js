import React, {useState, useEffect, useRef} from 'react';
import propTypes from 'prop-types';
import './Dropdown.css';

function Dropdown(props) {
    const [value, setValue] = useState(props.value);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
  return(
    <select value={value} onChange={handleChange}>
    {
            props.selections.map((selection) => {
                let isSelected = (value === selection.value);
                return(
                    <option value={selection.value} className={isSelected ? 'selected' : ''}>{selection.label}</option>
                );
            })
        }
    </select>
  )
}

export default Dropdown;