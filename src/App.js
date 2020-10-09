import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <header className='jumbotron'>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-6 col-sm-6'>
                            <h1>
                                Notes <span className='badge badge-secondary'>v0.0.1</span>
                            </h1>
                        </div>
                        <div className='col-6 col-sm-6'></div>
                    </div>
                </div>
            </header>
            <div id='arrow-container' className='container'>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        <div className='d-flex align-items-center justify-content-center p-3 py-5 mb-2 rounded'>
                            <svg
                                width='1em'
                                height='1em'
                                viewBox='0 0 16 16'
                                classNameName='bi bi-chevron-compact-down'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className='col-sm-4'></div>
                </div>
            </div>
            <div id='days-container' className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <h4>
                                            7th October
                                            <p className='text-muted'>Wednesday</p>
                                        </h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <span className='badge badge-pill badge-danger'>
                                            Yesterday
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <span className='badge badge-pill badge-warning'>Deadline</span>
                                    <li className='list-group-item'>Calculus homework</li>

                                    <span className='badge badge-light'>16:30</span>
                                    <li className='list-group-item'>
                                        Meet Alice at Hard Rock Cafe
                                    </li>
                                </ul>
                            </div>
                            <div className='card-footer text-muted'>
                                <button
                                    type='button'
                                    className='add-note btn btn-lg btn-block btn-light'
                                >
                                    Add a note
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <h4>
                                            8th October
                                            <p className='text-muted'>Thursday</p>
                                        </h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <span className='badge badge-pill badge-success'>
                                            Today
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <span className='badge badge-pill badge-warning'>Deadline</span>
                                    <li className='list-group-item'>Java Test on Maven</li>

                                    <span className='badge badge-light'>15:00</span>
                                    <li className='list-group-item'>Gym</li>

                                    <span className='badge badge-pill badge-info'>
                                        Links or References
                                    </span>
                                    <li className='list-group-item'>
                                        The hitchhiker's guide to the galaxy
                                    </li>
                                </ul>
                            </div>
                            <div className='card-footer text-muted'>
                                <button
                                    type='button'
                                    className='add-note btn btn-lg btn-block btn-light'
                                >
                                    Add a note
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <h4>
                                            9th October
                                            <p className='text-muted'>Friday</p>
                                        </h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <span className='badge badge-pill badge-primary'>
                                            Tomorrow
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <span className='badge badge-pill badge-warning'>Deadline</span>
                                    <li className='list-group-item'>Economics homework</li>

                                    <span className='badge badge-light'>18:00</span>
                                    <li className='list-group-item'>
                                        Call my team to discuss project
                                    </li>

                                    <span className='badge badge-pill badge-info'>
                                        Links or References
                                    </span>
                                    <li className='list-group-item'>
                                        Introduction to Algorithms, CLRS
                                    </li>
                                </ul>
                            </div>
                            <div className='card-footer text-muted'>
                                <button
                                    type='button'
                                    className='add-note btn btn-lg btn-block btn-light'
                                >
                                    Add a note
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='note-editor container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='form-group'>
                            <label for='note-content'>Note content</label>
                            <input id='note-content' className='form-control' />
                        </div>
                        <button className='submit-note btn btn-primary'>Submit</button>
                    </div>
                </div>
            </div>

            <div className='col-sm-12'></div>
        </div>
    );
}

export default App;
