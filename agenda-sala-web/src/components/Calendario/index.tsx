import Calendar from 'react-calendar';

import './styles.css';
export const Calendario = () => {
    return (
        <Calendar minDate={new Date()} />
    );
}