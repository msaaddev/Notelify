import React, { useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import leftNotesData from './data/startingNotesLeft';
import middleNotesData from './data/startingNotesMiddle';
import rightNotesData from './data/startingNotesRight';

import Header from './components/Header';

import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

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
        document.querySelectorAll('.add-note').forEach(btn => {
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


    const [startingNotesLeft] = useState(leftNotesData);
    const [startingNotesMiddle] = useState(middleNotesData);
    const [startingNotesRight] = useState(rightNotesData);
    
    return (
        <div>
            <Header title='Notes' version='v0.0.1' />

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
                            <CardHeader 
                                monthDay='7th October' 
                                weekDay='Wednesday' 
                                relativeDay='Yesterday' 
                                badgeType='badge-danger'
                            />
                            <CardBody notes={startingNotesLeft}/>
                            <CardFooter/>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='card'>
                            <CardHeader 
                                monthDay='8th October' 
                                weekDay='Thursday' 
                                relativeDay='Today' 
                                badgeType='badge-warning'
                            />
                            <CardBody notes={startingNotesMiddle}/>
                            <CardFooter/>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='card'>
                            <CardHeader 
                                monthDay='9th October' 
                                weekDay='Friday' 
                                relativeDay='Tomorrow' 
                                badgeType='badge-primary'
                            />
                            <CardBody notes={startingNotesRight}/>
                            <CardFooter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='note-editor container'>

                <div id="emptySpace" className='row'></div>

                <div className='row'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-6'>
                        <div className='card'>
                            <div className='card-body'>

                                <div className='container'>
                                    <div className='row'>                                        
                                        <div className='col-sm-12' id="emptySpace"></div>
                                        
                                        <div className='col-sm-12'>
                                            <h5>Choose label for your note</h5>
                                        
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
                                        
                                        </div>

                                        <div className='col-sm-12'>
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
                                        </div>

                                        <div className='col-sm-12'>
                                            <div className='form-check'>
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
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12" id="emptySpace">

                                        </div>
                                        <div className="col-sm-12">
                                            <h5>Note or Event</h5>
                                            <div className='form-group note-content-input'>            
                                                <input id='note-content' className='form-control' placeholder="Write down anything important for you"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-sm-12' id="emptySpace"></div>
                                        <div className='col-sm-12'>
                                            <button className='submit-note btn btn-primary'>Add</button>
                                        </div>
                                        <div className='col-sm-12' id="emptySpace"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-sm-12'></div>
        </div>
    );
}

export default App;
