import React from "react";
import { events } from "../constants";
import { formatDate } from "../utils";

const PastEventList: React.FC = () => {
  const today = new Date();

  // Filter for past events
  const pastEvents = events.filter((event) => {
    const [day, month, year] = event.date.split("/").map(Number);
    const eventDate = new Date(year, month - 1, day); // Create a Date object
    return eventDate < today; // Compare dates
  });

  // Sort past events by date in descending order
  pastEvents.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("/").map(Number);
    const [dayB, monthB, yearB] = b.date.split("/").map(Number);
    return (
      new Date(yearB, monthB - 1, dayB).getTime() -
      new Date(yearA, monthA - 1, dayA).getTime()
    );
  });

  // Get the latest 2 past events
  const displayedEvents = pastEvents.slice(0, 2);

  return (
    <div className="w-full flex flex-col ">
      <h5 className="font-semibold text-lg">Past Events</h5>

      <div className="flex-grow overflow-auto bg-white">
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event, index) => (
            <div key={index} className="flex flex-col mt-3">
              <h4 className="font-bold text-primary">{event.title}</h4>
              <h4 className="font-light text-sm  text-gray-500">{event.description}</h4>
              <h6 className="font-bold text-sm text-gray-500"> {formatDate(event.date) + " " + event.date.split("/")[2]}</h6>{" "}
              {/* Use formatDate to format the date */}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No past events.</div>
        )}
      </div>
    </div>
  );
};

export default PastEventList;
