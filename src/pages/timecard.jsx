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
    const timeIn = document.getElementById('mondayTimeIn').value || 0;
    const timeOut = document.getElementById('mondayTimeOut').value || 0;
    const totalTime = timeOut - timeIn;
    document.getElementById("totalMond").innerHTML = totalTime;
}

mondayTotal();

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
                <tr>
                    <td>Monday</td>
                    <td>
                        <InputGroup>
                            <Form.Control id="mondayTimeIn"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control id="mondayTimeOut"></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td id="totalMond">total</td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>

                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>

                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>

                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td>

                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control></Form.Control>
                        </InputGroup>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            <Button onClick={mondayTotal}>Calculate</Button>

        </Table >
    );
}
