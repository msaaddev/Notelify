import React, { useState, useEffect } from 'react';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

/* import leftNotesData from './data/startingNotesLeft';
import middleNotesData from './data/startingNotesMiddle';
import rightNotesData from './data/startingNotesRight'; */
import notes from './data/notes';
import headInfo from './data/notesHead';

import Header from './components/Header';

import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

import './App.css';
import './styles/style.css';

function App() {
    let namespaceGlobal = {
        lastSelectedDayId: null,
        lastTimePicked: null,
    };

    useEffect(() => {
        const init = () => {
            document.querySelectorAll('.add-note').forEach(btn => {
                btn.addEventListener('click', () => addNote(btn));
            });

            document.querySelectorAll('.submit-note').forEach(btn => {
                btn.addEventListener('click', submitNote);
            });

            document.querySelectorAll('.cancel-note').forEach(btn => {
                btn.addEventListener('click', moveEditorRight);
            });
        };
        init();
    }, []);

    const addNote = btn => {
        let card = btn.closest('.card');
        namespaceGlobal.lastSelectedDayId = card.id;
        moveEditorLeft();
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
            span.innerHTML = namespaceGlobal.lastTimePicked;
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

        let card = document.querySelector('#' + namespaceGlobal.lastSelectedDayId);
        let list = card.querySelector('.list-group');

        list.insertBefore(li, list.firstElementChild);
        list.insertBefore(span, list.firstElementChild);

        moveEditorRight();
    };

    const delimiterAfterHeader = 'header-delimiter';
    const moveEditorLeft = () => {
        let editor = document.querySelector('.note-editor');
        let offset =
            document.querySelector('.jumbotron').offsetHeight +
            document.querySelector('.' + delimiterAfterHeader).offsetHeight;

        editor.style.top = offset + 'px';
        editor.style.left = '0';
    };

    const moveEditorRight = () => {
        let editor = document.querySelector('.note-editor');
        editor.style.left = '100vw';
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
        namespaceGlobal.lastTimePicked = `${h}:${m}`;
    };

    /*     const [startingNotesLeft] = useState(leftNotesData);
    const [startingNotesMiddle] = useState(middleNotesData);
    const [startingNotesRight] = useState(rightNotesData); */
    const [notesKeys] = useState(Object.keys(notes));

    return (
        <div id='#bootstrap-overrides'>
            <Header title='Notes' version='v0.0.1' />
            <div className={delimiterAfterHeader}></div>
            <div className='flex-wrapper'>
                <div id='days-container' className='flex-container slider'>
                    {notesKeys.map(note => (
                        <div className='card flex-card slide'>
                            <CardHeader headInfo={headInfo[note]} />
                            <CardBody notes={notes[note]} />
                            <CardFooter />
                        </div>
                    ))}
                </div>
            </div>
            <div className='note-editor'>
                <div className='card note-editor-card'>
                    <div className='card-body'>
                        <h5>Note or Event</h5>
                        <div className='form-group note-content-input'>
                            <input
                                id='note-content'
                                className='form-control'
                                placeholder='Write down anything important for you'
                            />
                        </div>
                        <h5>Choose label for your note</h5>

                        <div className='form-check note-badge-line'>
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

                        <div className='form-check note-badge-line'>
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

                        <div className='form-check note-badge-line'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='badge-radio'
                                id='badge-time'
                            ></input>
                            <label className='form-check-label badge-radio' htmlFor='badge-time'>
                                <span className='badge badge-pill badge-light'>Time</span>
                            </label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardTimePicker onChange={e => timePickerChange(e)} />
                            </MuiPickersUtilsProvider>
                        </div>

                        <button className='submit-note btn btn-primary'>Add</button>
                        <button className='cancel-note btn'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
