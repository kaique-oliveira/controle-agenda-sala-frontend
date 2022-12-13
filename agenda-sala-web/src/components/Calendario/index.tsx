import Calendar, { CalendarProps } from 'react-calendar';

import './styles.css';


export const Calendario = ({...rest} : CalendarProps ) => {
    return (
        <Calendar minDate={new Date()} {...rest} />
    );
}