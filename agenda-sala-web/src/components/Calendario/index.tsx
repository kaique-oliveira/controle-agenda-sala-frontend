import Calendar, { CalendarProps } from 'react-calendar';
import './styles.css';

const Calendario = ({...rest} : CalendarProps ) => {
    return (
        <Calendar minDate={new Date()} {...rest} />
    );
}
export default Calendario