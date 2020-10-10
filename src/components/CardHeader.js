import React from 'react';

const CardHeader = ({monthDay, weekDay, relativeDay, badgeType}) => {
    let badgeClasses = 'badge badge-pill ' + badgeType;
    return (
        <div className='card-header'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h4>
                        {monthDay}
                        <p className='text-muted'>{weekDay}</p>
                    </h4>
                </div>

                <div className='col-sm-6'>
                    <span className={badgeClasses}>
                        {relativeDay}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
