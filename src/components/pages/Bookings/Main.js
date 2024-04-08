import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';
import pages from '../../../utilities/pages';
import BookingForm from './BookingForm';
import {fetchAPI, submitAPI} from '../../../utilities/API'

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('confirmedBooking').path);
  }; 

  return (
    <div className="bookings">
      <h2 className="ff-serif fs-500">Table Reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;
