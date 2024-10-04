import React, { useState } from "react";
import PaginationBtn from "./PaginationBtn";
import { events } from "../constants";
import { formatDate } from "../utils";

interface Event {
  title: string;
  date: string;
  location: string;
  amount: string;
  time: string;
  description: string;
}

const EventList: React.FC = () => {
  const today = new Date();

  // filter for upcoming events ---------------------------------------------------------------------
  const upcomingEvents = events.filter((event) => {
    const [day, month, year] = event.date.split("/").map(Number);
    // create a date object
    const eventDate = new Date(year, month - 1, day);
    //compare dates
    return eventDate >= today;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;
  const totalPages = Math.ceil(upcomingEvents.length / eventsPerPage);

  // get the events for the current page ----------------------
  const displayedEvents = upcomingEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // show details of the event in an alert box-------------------------
  const handleDetails = (event: Event) => {
    console.log(event, "event");
    alert(`${event.title} - ${event.location} - ${event.description}`);
  };

  //Navigate through pages---------------------
  const onPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //Navigate through pages---------------------

  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-6 border-b-2 pb-5 border-[#F9FAFB]">
        <h5 className="font-semibold text-lg">Upcoming Events</h5>
        <div className="flex gap-2">
          <PaginationBtn onLeftClick={onPrev} next={false} />
          <PaginationBtn onRightClick={onNext} next={true} />
        </div>
      </div>
      <div className="flex-grow overflow-auto bg-white">
        {displayedEvents.length > 0 ? (
          displayedEvents.map((event, index) => (
            <div key={index} className="grid grid-cols-12 items-center mb-4 ">
              <section className="col-span-3 md:col-span-1 flex flex-col text-left ">
                <p className="text-sm md:text-xl font-bold pr-4">
                  {formatDate(event.date)}
                </p>
                <p className="text-sm text-secondary">{event.time}</p>
                <p className="text-sm md:text-md text-primary font-bold">
                  {event.amount}
                </p>
              </section>

              <div className="col-span-7 md:col-span-9 flex flex-col border-l-4 mr-5 border-primary pl-4">
                <h4 className="text-md font-sans text-primary">
                  {event.location}
                </h4>
                <h4 className="font-sans text-xl font-bold">{event.title}</h4>
                <h4 className="font-sans font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                  {event.description}
                </h4>
              </div>

              <div className="col-span-2 flex justify-end">
                <PaginationBtn
                  next={true}
                  onRightClick={() => handleDetails(event)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No upcoming events.</div>
        )}
      </div>

      {/* Pagination Controls ---------------------*/}
      <div className="flex justify-center mt-4 items-center gap-4">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`py-2 text-secondary rounded font-sans font-bold ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <i
            className="fa fa-chevron-left"
            style={{ color: "#AEBBC8", fontSize: "0.9rem",paddingRight:'0.5rem' }}
          ></i>{" "}
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => changePage(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 rounded-full text-white font-sans font-bold"
                : "font-sans font-bold"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={` py-2 text-secondary rounded font-sans font-bold ${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Next
          <i
            className="fa fa-chevron-right"
            style={{ color: "#AEBBC8", fontSize: "0.9rem",paddingLeft:'0.5rem' }}
          ></i>{" "}
        </button>
      </div>
    </div>
  );
};

export default EventList;
