import React from 'react'
import { format } from "date-fns";

function DateFormatter({ date }) {
  let importedDate = new Date(date);
  let formattedDate = format(importedDate, 'd MMMM yyyy');
  return (
    <>{formattedDate}</>
  )
}

export default DateFormatter
