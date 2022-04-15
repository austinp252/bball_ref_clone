import React, {useState, useEffect, useRef, Fragment} from 'react';
import {Link, useParams} from 'react-router-dom';

import sortTable from '../../../helper_functions/sortTable';
import sortTableLastname from '../../../helper_functions/sortTableLastname';
import sortTableDate from '../../../helper_functions/sortTableDate';

function SortableTable(props) {

    const [data, setData] = useState(props.tableData);
    const [subHeadDiv, setSubHeadDiv] = useState(999);
    const [tableData, setTableData] = useState(props.tableData);
    const [sortCategory, setSortCategory] = useState(-1);
    const [sortMethod, setSortMethod] = useState(true);
    const defaultIndex = props.defaultIndex;
    const params = useParams();
    const downArrow = (
        <Fragment>
            &#x21e9;
        </Fragment>
    )
    const upArrow = (
        <Fragment>
            &#x21e7;
        </Fragment>
    )
    
    useEffect(() => {
        if(props.subHeadDiv) {
            setSubHeadDiv(props.subHeadDiv);
        }
        setData(props.tableData);
        setTableData(sortTable(props.tableData, defaultIndex, true));
    },[props.tableData]);

  return (
        <table>
            <thead>
                <tr>
                    {
                        props.headers.map((header, index) => {
                            if(header.type === 'number' || header.type === 'string') {
                                return(
                                    <th className={sortCategory===index ? 'sortable active' : 'sortable'} onClick={()=>{
                                        if(sortCategory === index) {
                                            if(!sortMethod) {
                                                setSortCategory(-1);
                                                setTableData(sortTable(data, defaultIndex, true));
                                            } else {
                                                setSortMethod(!sortMethod);
                                                setTableData(sortTable(data, sortCategory, !sortMethod));
                                            }
                                        } else {
                                            setSortCategory(index);
                                            setSortMethod(true);
                                            setTableData(sortTable(data, index, true));
                                        }
                                    }}>
                                        {header.header}
                                        {sortCategory===index ? <br/> : ''}
                                        {sortCategory===index ? (sortMethod ? downArrow : upArrow) : ''}
                                    </th>
                                )
                            } else if(header.type === 'name') {
                                return(
                                    <th className={sortCategory===index ? 'sortable active' : 'sortable'} onClick={()=>{
                                        if(sortCategory === index) {
                                            if(!sortMethod) {
                                                setSortCategory(-1);
                                                setTableData(sortTableLastname(data, 0, true));
                                            } else {
                                                setSortMethod(!sortMethod);
                                                setTableData(sortTableLastname(data, sortCategory, !sortMethod));
                                            }
                                        } else {
                                            setSortCategory(index);
                                            setSortMethod(true);
                                            setTableData(sortTableLastname(data, index, true));
                                        }
                                    }}>
                                        {header.header}
                                        {sortCategory===index ? <br/> : ''}
                                        {sortCategory===index ? (sortMethod ? downArrow : upArrow) : ''}
                                    </th>
                                )
                            } else if(header.type === 'date') {
                                return(
                                    <th className={sortCategory===index ? 'sortable active' : 'sortable'} onClick={()=>{
                                        if(sortCategory === index) {
                                            if(!sortMethod) {
                                                setSortCategory(-1);
                                                setTableData(sortTableDate(data, 0, false));
                                            } else {
                                                setSortMethod(!sortMethod);
                                                setTableData(sortTableDate(data, sortCategory, !sortMethod));
                                            }
                                        } else {
                                            setSortCategory(index);
                                            setSortMethod(true);
                                            setTableData(sortTableDate(data, index, true));
                                        }
                                    }}>
                                        {header.header}
                                        {sortCategory===index ? <br/> : ''}
                                        {sortCategory===index ? (sortMethod ? downArrow : upArrow) : ''}
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
                    tableData.map((dataRow, index) => {
                        return(
                            <Fragment>
                                <tr>
                                    {
                                        dataRow.map((dataItem, colIndex) => {
                                            if(!dataItem.link) {
                                                return(
                                                    <td className={sortCategory===colIndex ? 'active': ''}>
                                                        {dataItem.dataContent}
                                                    </td>
                                                )
                                            } else {
                                                return(
                                                    <td className={sortCategory===colIndex ? 'active': ''}>
                                                        <Link to={dataItem.link}>{dataItem.dataContent}</Link>
                                                    </td>
                                                )
                                            }
                                        })
                                    }
                                </tr>
                                {(index+1)%subHeadDiv===0 &&
                                    <tr>
                                        {
                                            props.headers.map((header) => {
                                                return(
                                                    <th>
                                                        {header.header}
                                                    </th>
                                                )
                                            })
                                        }
                                    </tr>
                                }
                            </Fragment>
                        )
                    })
                }
            </tbody>
        </table>
  )
}

export default SortableTable