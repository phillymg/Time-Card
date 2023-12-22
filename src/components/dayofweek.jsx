import '../styles/dayofweek.css';
import { Table, InputGroup, Form, Button } from 'react-bootstrap';



const DayOfWeek = ({ dayweek, timein, timeout, lunch, total, pto, newtotal, date }) => {
    return (
        <tr>
            <td>{dayweek}</td>
            <td>
                <InputGroup>
                    <Form.Control id={timein}></Form.Control>
                </InputGroup>
            </td>
            <td>
                <InputGroup>
                    <Form.Control id={timeout}></Form.Control>
                </InputGroup>
            </td>
            <td>
                <InputGroup>
                    <Form.Control id={lunch}></Form.Control>
                </InputGroup>
            </td>
            <td id={total}></td>
            <td>
                <InputGroup>
                    <Form.Control id={pto}></Form.Control>
                </InputGroup>
            </td>
            <td id={newtotal}></td>
            <td id={date}></td>
        </tr>

    );
};

export { DayOfWeek };