import React, {useState, useEffect, useRef, Fragment} from 'react';
import {Link, useParams} from 'react-router-dom';

import sortTable from '../../../helper_functions/sortTable';

function SortableTable(props) {

    const [data, setData] = useState(props.tableData);
    const [sortCategory, setSortCategory] = useState(0);
    const [sortMethod, setSortMethod] = useState(true);
    const params = useParams();
    
    useEffect(() => {
        console.log('SC ' + sortCategory + ' SM ' + sortMethod);
        setData(sortTable(data, sortCategory, sortMethod));
    },[sortCategory, sortMethod]);

  return (
    <Fragment>
        <table>
            <thead>
                <tr>
                    {
                        props.headers.map((header, index) => {
                            if(header.type === 'number' || header.type === 'string') {
                                return(
                                    <th className='sortable' onClick={()=>{
                                        if(sortCategory === index) {
                                            setSortMethod(!sortMethod);
                                        } else {
                                            setSortCategory(index);
                                            setSortMethod(true);
                                        }
                                    }}>
                                        {header.header}
                                    </th>
                                )
                            } else {
                                return(
                                    <th>
                                        {header.header}
                                    </th>
                                )
                            }
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dataRow) => {
                        return(
                            <tr>
                                {
                                    dataRow.map((dataItem) => {
                                        if(!dataItem.link) {
                                            return(
                                                <td>
                                                    {dataItem.dataContent}
                                                </td>
                                            )
                                        } else {
                                            return(
                                                <td>
                                                    <Link to={dataItem.link}>{dataItem.dataContent}</Link>
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </Fragment>
  )
}

export default SortableTable