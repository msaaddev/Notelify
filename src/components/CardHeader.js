import React from 'react';

const CardHeader = ({ headInfo }) => {
    let badgeClasses = 'badge badge-pill ' + headInfo.badgeType;
    return (
        <div className='card-header'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h4>
                        {headInfo.monthDay}
                        <p className='text-muted'>{headInfo.weekDay}</p>
                    </h4>
                </div>

                <div className='col-sm-6'>
                    <span className={badgeClasses}>{headInfo.relativeDay}</span>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
