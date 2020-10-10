import React from 'react';

const DayEntry = ({ badgeType, badgeContent, noteContent }) => {
    let badgeClasses = 'badge badge-pill ' + badgeType;
    return (
        <>
            <span className={badgeClasses}>{badgeContent}</span>
            <li className='list-group-item'>{noteContent}</li>
        </>
    );
};

export default DayEntry;
