import { MdPlace } from "react-icons/md";
import { IoMdMan } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock8 } from "react-icons/lu";
import { EventStyle } from '../styles/event';

export const Event = ({ event }) => {
  const startTime = new Date(event.time.start);
  const endTime = new Date(event.time.end);

  const durationInHours = Math.abs((endTime - startTime) / (1000 * 60 * 60));

  return (
    <EventStyle className="event">
        <h2>{event.name}</h2>
        <ul>
            <li>
                <MdPlace /> {event.location}
            </li>
            <li>
                <IoMdMan /> {event.speaker}
            </li>
            <li>
                <IoCalendarOutline /> {startTime.toLocaleDateString()}
            </li>
            <li>
                <LuClock8 /> {durationInHours} hours
            </li>
        </ul>
    </EventStyle>
  );
};