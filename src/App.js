import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './App.css';
import './styles/style.css';

function App() {
    const [lastSelectedDay, setLastSelectedDay] = useState(null);
    const [lastTimePicked, setLastTimePicked] = useState(null);

    const addNote = btn => {
        let card = btn.closest('.card');
        setLastSelectedDay(card);
        bubbleUpEditor();
    };

    const createBadgeFromRadioButtons = () => {
        let span = document.createElement('span');

        span.innerHTML = 'Deadline';
        let classNames = ['badge', 'badge-pill'];
        let [deadline, link, time] = ['deadline', 'link', 'time'].map(num =>
            document.querySelector('#badge-' + num)
        );

        if (deadline.checked) {
            span.innerHTML = 'Deadline';
            classNames.push('badge-warning');
        } else if (link.checked) {
            span.innerHTML = 'Link or reference';
            classNames.push('badge-info');
        } else {
            // time.checked
            span.innerHTML = lastTimePicked;
            classNames.push('badge-light');
        }

        span.className = classNames.join(' ');
        return span;
    };

    const submitNote = () => {
        let noteContent = document.querySelector('#note-content').value;

        let span = createBadgeFromRadioButtons();

        let li = document.createElement('li');
        li.innerHTML = noteContent;
        li.className = 'list-group-item';

        let card = lastSelectedDay;
        let list = card.querySelector('.list-group');

        list.insertBefore(li, list.firstElementChild);
        list.insertBefore(span, list.firstElementChild);

        bubbleDownEditor();
    };

    const bubbleUpEditor = () => {
        let editor = document.querySelector('.note-editor');
        let offset =
            document.querySelector('#days-container').offsetHeight +
            document.querySelector('#arrow-container').offsetHeight;

        editor.style.top = '-' + offset + 'px';
    };

    const bubbleDownEditor = () => {
        let editor = document.querySelector('.note-editor');
        editor.style.top = '100vh';
    };

    const init = () => {
        let addNoteButtons = document.querySelectorAll('.add-note');
        addNoteButtons.forEach(btn => {
            btn.addEventListener('click', () => addNote(btn));
        });

        document.querySelector('.submit-note').addEventListener('click', submitNote);
    };

    const timePickerChange = date => {
        console.log(date);
        let h = date.getHours();
        let m = date.getMinutes();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        const temp = `${h}:${m}`;
        setLastTimePicked(temp);
    };

    document.addEventListener('DOMContentLoaded', init);

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
                                className='bi bi-chevron-compact-down'
                                fill='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
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
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='badge-radio'
                                id='badge-deadline'
                                defaultChecked
                            ></input>
                            <label
                                className='form-check-label badge-radio'
                                htmlFor='badge-deadline'
                            >
                                <span className='badge badge-pill badge-warning'>Deadline</span>
                            </label>
                        </div>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='badge-radio'
                                id='badge-link'
                            ></input>
                            <label className='form-check-label badge-radio' htmlFor='badge-link'>
                                <span className='badge badge-pill badge-info'>
                                    Link or reference
                                </span>
                            </label>
                        </div>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='badge-radio'
                                id='badge-time'
                            ></input>
                            <label className='form-check-label badge-radio' htmlFor='badge-time'>
                                <span className='badge badge-pill badge-light'>HH:MM</span>
                                Select custom time:
                            </label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker onChange={e => timePickerChange(e)} />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className='form-group note-content-input'>
                            <label htmlFor='note-content'>Note content</label>
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
