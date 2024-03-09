import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';

type DateCalenderProps = {
  setDate:(val:Dayjs) => void
}

export default function BasicDateCalendar({setDate}:DateCalenderProps) {
  const [value, setValue] = React.useState<Dayjs>(dayjs(Date.now()));
  React.useEffect(() => {
    setDate(value);
  },[value,setDate])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar 
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        value={value}
        onChange={(val) => setValue(val)}
      />
    </LocalizationProvider>
  );
}