import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import Grid from "@mui/material/Grid";
import esLocale from "date-fns/locale/es";

export default function SubComponentsPickers() {
  const [date, setDate] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
