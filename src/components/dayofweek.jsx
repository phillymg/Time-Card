import '../styles/dayofweek.css';
import { Table } from 'react-bootstrap';



const DayOfWeek = ({ dayweek, timein, timeout, lunch, total, pto, newtotal, date }) => {
    return (
        <tr>
            <td>{dayweek}</td>
            <td>{timein}</td>
            <td>{timeout}</td>
            <td>{lunch}</td>
            <td>{total}</td>
            <td>{pto}</td>
            <td>{newtotal}</td>
            <td>{date}</td>
        </tr>

    );
};

export { DayOfWeek };