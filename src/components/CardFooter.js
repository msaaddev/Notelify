import React from 'react';

const CardFooter = () => {
    return (
        <div className='card-footer text-muted'>
            <button
                type='button'
                className='add-note btn btn-lg btn-block btn-light'
            >
                Add a note
            </button>
        </div>
    );
};

export default CardFooter;
