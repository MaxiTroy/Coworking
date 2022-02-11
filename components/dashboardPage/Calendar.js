//    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
//import esLocale from 'date-fns/locale/es';
import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import MonthPicker from '@mui/lab/MonthPicker';
import YearPicker from '@mui/lab/YearPicker';
import Grid from '@mui/material/Grid';
import esLocale from 'date-fns/locale/es';

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

export default function SubComponentsPickers() {
  const [date, setDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </Grid>
        
        
      </Grid>
    </LocalizationProvider>
  );
}

