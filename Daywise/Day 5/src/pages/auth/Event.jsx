import { useState } from 'react';
import '../../assets/css/EventPage.css'; // Import your CSS file for styling
import eventImage from '../../images/eve.jpg'; // Import your static event image

const EventPage = () => {
  // State variables for dropdown selections
  const [eventType, setEventType] = useState('');
  const [numGuests, setNumGuests] = useState('');
  const [budgetPerPerson, setBudgetPerPerson] = useState('');
  const [cuisine, setCuisine] = useState('');

  // Event type options
  const eventTypes = ['Annual Meet', 'Seminar', 'Product Launch', 'Conference'];

  // Number of guests options
  const numGuestsOptions = ['Less than 50', '50-100', '100-200', 'More than 200'];

  // Budget per person options
  const budgetOptions = ['$50 - $100', '$100 - $200', '$200 - $300', 'More than $300'];

  // Cuisine options
  const cuisineOptions = ['Veg', 'Non-Veg', 'Veg & Non-Veg', 'Liquor'];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="event-page">
      <div className="event-image">
        <img src={eventImage} alt="Event" />
      </div>
      <div className="event-form">
        <h2>Book Your Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventType">Event Type:</label>
            <select id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <option value="">Select Event Type</option>
              {eventTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numGuests">Number of Guests:</label>
            <select id="numGuests" value={numGuests} onChange={(e) => setNumGuests(e.target.value)}>
              <option value="">Select Number of Guests</option>
              {numGuestsOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget Per Person:</label>
            <select id="budget" value={budgetPerPerson} onChange={(e) => setBudgetPerPerson(e.target.value)}>
              <option value="">Select Budget Per Person</option>
              {budgetOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cuisine">Cuisine:</label>
            <select id="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
              <option value="">Select Cuisine</option>
              {cuisineOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default EventPage;
