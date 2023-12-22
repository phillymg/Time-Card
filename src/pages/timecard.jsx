import React from 'react';
import { Table, InputGroup, Form, Button } from 'react-bootstrap';
import '../styles/timecard.css';
import { DayOfWeek } from '../components/dayofweek';

const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const currentDate = month + "/" + date + "/" + year;

function mondayTotal() {
    const timeIn = parseFloat(document.getElementById('mondayTimeIn').value) || 0;
    const timeOut = parseFloat(document.getElementById('mondayTimeOut').value) || 0;
    const lunch = parseFloat(document.getElementById('mondayLunch').value) || 0;
    const pto = parseFloat(document.getElementById('mondayPTO').value) || 0;
    const totalTime = timeOut - timeIn - lunch;
    const newTotal = totalTime + pto;
    document.getElementById("totalMond").innerHTML = totalTime;
    document.getElementById("newMond").innerHTML = newTotal;
}


function tuesdayTotal() {
    const timeIn = parseFloat(document.getElementById('tuesdayTimeIn').value) || 0;
    const timeOut = parseFloat(document.getElementById('tuesdayTimeOut').value) || 0;
    const lunch = parseFloat(document.getElementById('tuesdayLunch').value) || 0;
    const pto = parseFloat(document.getElementById('tuesdayPTO').value) || 0;
    const totalTime = timeOut - timeIn - lunch;
    const newTotal = totalTime + pto;
    document.getElementById("totalTues").innerHTML = totalTime;
    document.getElementById("newTues").innerHTML = newTotal;

}

function wednesdayTotal() {
    const timeIn = parseFloat(document.getElementById('wednesdayTimeIn').value) || 0;
    const timeOut = parseFloat(document.getElementById('wednesdayTimeOut').value) || 0;
    const lunch = parseFloat(document.getElementById('wednesdayLunch').value) || 0;
    const pto = parseFloat(document.getElementById('wednesdayPTO').value) || 0;
    const totalTime = timeOut - timeIn - lunch;
    const newTotal = totalTime + pto;
    document.getElementById("totalWed").innerHTML = totalTime;
    document.getElementById("newWed").innerHTML = newTotal;

}

function thursdayTotal() {
    const timeIn = parseFloat(document.getElementById('thursdayTimeIn').value) || 0;
    const timeOut = parseFloat(document.getElementById('thursdayTimeOut').value) || 0;
    const lunch = parseFloat(document.getElementById('thursdayLunch').value) || 0;
    const pto = parseFloat(document.getElementById('thursdayPTO').value) || 0;
    const totalTime = timeOut - timeIn - lunch;
    const newTotal = totalTime + pto;
    document.getElementById("totalThur").innerHTML = totalTime;
    document.getElementById("newThur").innerHTML = newTotal;
}

function fridayTotal() {
    const timeIn = parseFloat(document.getElementById('fridayTimeIn').value) || 0;
    const timeOut = parseFloat(document.getElementById('fridayTimeOut').value) || 0;
    const lunch = parseFloat(document.getElementById('fridayLunch').value) || 0;
    const pto = parseFloat(document.getElementById('fridayPTO').value) || 0;
    const totalTime = timeOut - timeIn - lunch;
    const newTotal = totalTime + pto;
    document.getElementById("totalFri").innerHTML = totalTime;
    document.getElementById("newFri").innerHTML = newTotal;

}

function calculateAll() {
    mondayTotal();
    tuesdayTotal();
    wednesdayTotal();
    thursdayTotal();
    fridayTotal();
}

export default function TimeCard() {

    return (
        <Table striped bordered hover className='wholeTable'>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Lunch</th>
                    <th>Total</th>
                    <th>PTO</th>
                    <th>New Total</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <DayOfWeek dayweek="Monday" timein="mondayTimeIn" timeout="tuesdayTimeOut" lunch="mondayLunch" total="totalMond" pto="mondayPTO" newtotal="newMond" date=""></DayOfWeek>
                <tr>
                    <td>Tuesday</td>
                    <td>
                        <InputGroup>
                            <Form.Control id="tuesdayTimeIn"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="tuesdayTimeOut"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="tuesdayLunch"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="totalTues"></td>
                    <td>
                        <InputGroup>
                            <Form.Control id="tuesdayPTO"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="newTues"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>
                        <InputGroup>
                            <Form.Control id="wednesdayTimeIn"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="wednesdayTimeOut"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="wednesdayLunch"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="totalWed"></td>
                    <td>
                        <InputGroup>
                            <Form.Control id="wednesdayPTO"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="newWed"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>
                        <InputGroup>
                            <Form.Control id="thursdayTimeIn"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="thursdayTimeOut"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="thursdayLunch"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="totalThur"></td>
                    <td>
                        <InputGroup>
                            <Form.Control id="thursdayPTO"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="newThur"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>
                        <InputGroup>
                            <Form.Control id="fridayTimeIn"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="fridayTimeOut"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="fridayLunch"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="totalFri"></td>
                    <td>
                        <InputGroup>
                            <Form.Control id="fridayPTO"></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="newFri"></td>
                    <td></td>
                </tr>
            </tbody>
            <Button onClick={calculateAll}>Calculate</Button>

        </Table >
    );
}
