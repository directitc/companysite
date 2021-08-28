import React from 'react'
import './List.css';

const List = ({classStyle, list}) => {
    let displayList = [];

    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
        displayList.push(<li>{list[i]}</li>);
    }
    return (
        <ul className={classStyle}>
            {displayList}
        </ul>
    )
}

export default List
