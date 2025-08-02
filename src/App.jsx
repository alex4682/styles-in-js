// import logo from './logo.svg';
import './App.css';
import { EventWrapper } from './styles/event';
import { EventTitle } from './styles/event';

import { Event } from './components/Event';

function App({ events }) {

  return (
    <>
      <EventTitle>
        <h1>24th Core World Coalition Conference</h1>
      </EventTitle>
      <EventWrapper>
        {events.map((event, index) => (
          <Event event={event} />
        ))}
      </EventWrapper>
    </>
  );
}

export default App;
