import React from 'react';

const Header = ({ title, version }) => {
    return (
        <header className='jumbotron title-header'>
            <div className='container'>
                <div className='row row-header'>
                    <div className='col-6 col-sm-6'>
                        <h1>
                            {title} <span className='badge badge-secondary'>{version}</span>
                        </h1>
                    </div>
                    <div className='col-6 col-sm-6'></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
