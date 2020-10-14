import React from 'react';

const DayEntry = ({ badgeType, badgeContent, noteContent }) => {
    let badgeClasses = 'badge badge-pill ' + badgeType + ' delete-holder';
    return (
        <>
            <span className={badgeClasses}>
                {badgeContent}
                <div className='delete-button'></div>
            </span>
            <li className='list-group-item'>{noteContent}</li>
        </>
    );
};

export default DayEntry;
