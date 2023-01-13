import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Navbar from '../../components/navbar/Navbar';

//need a formcomponet

export default function Booking() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <DateTimePicker onChange={onChange} value={value} />

        <p> BOOKING: what I would like to display here ...</p>
        <ul>
          <li>Nav Bar: on choosing logging in successfully users are lead to the booking page. So the navbar will need to display only LOGOUT from home page a user is lead to this page</li>
          <li>Title: Welcome to Lianes home page persist will not display - and instead display - "Welcome back ! - perhaps we will conside using the user's registration name</li>
          <li> If a user had previously uploaded a picture of their cat - it will displayed here too </li>
          <li>A booking form - facillitates selection of services using a checkboxes. Selection date and time of booking. Sending of messages to admin</li>
          <li>I will attempt to implement payment via stripe or other payment service API</li>
          <li> booking will also facilitate arrangement of payment for services</li>
          <li>So once again here they will also be a need to communicate with the backend</li>
          <li> On Logging out they will be directed to the homepage</li>
          <li>footer</li>
        </ul>
       </>
  )
}
