import React, {useState, useEffect, useRef, Fragment} from 'react';
import {Link, useParams} from 'react-router-dom';

import sortTable from '../../../helper_functions/sortTable';

function SortableTable(props) {

    const [data, setData] = useState(props.tableData);
    const [tableData, setTableData] = useState(data);
    const [sortCategory, setSortCategory] = useState(0);
    const [sortMethod, setSortMethod] = useState(true);
    const params = useParams();
    
    useEffect(() => {
        setData(props.tableData);
        setTableData(props.tableData);
        console.log('SC ' + sortCategory + ' SM ' + sortMethod);
        //setTableData(sortTable(data, sortCategory, sortMethod));
        console.log('table data set');

    },[props.tableData]);

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
                                            setTableData(sortTable(data, sortCategory, !sortMethod));
                                        } else {
                                            setSortCategory(index);
                                            setSortMethod(true);
                                            setTableData(sortTable(data, index, true));
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
                    tableData.map((dataRow) => {
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