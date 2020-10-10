import React from 'react';

import DayEntry from './DayEntry';

const CardBody = ({notes}) => {
    return (
        <div className='card-body'>
            <ul className='list-group list-group-flush'>
            {
                notes.map(note => (
                    <DayEntry
                        badgeType={note.badgeType}
                        badgeContent={note.badgeContent}
                        noteContent={note.noteContent}
                        key={Math.floor(Math.random() * 10000)}
                    />
                ))
            }
            </ul>
        </div>
    );
};

export default DayEntry;
