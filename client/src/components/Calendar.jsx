import React from 'react';
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
//importing hardcoded events so calendar can render
import events from '../events';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let Calendar = () => (
  <BigCalendar
    events={events}
    selectable
    defaultDate={new Date()}
  />
);

export default Calendar;