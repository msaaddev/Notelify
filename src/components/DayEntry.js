import React from 'react';
import cross from '../images/cross.png';

const DayEntry = ({ badgeType, badgeContent, noteContent }) => {
    let badgeClasses = 'badge badge-pill ' + badgeType + ' delete-holder';
    return (
        <>
            <span className={badgeClasses}>
                {badgeContent}
                <div className='delete-button'>
                    <img src={cross}/>
                </div>
            </span>
            <li className='list-group-item'>{noteContent}</li>
        </>
    );
};

export default DayEntry;
