import Calendar from "./Calendar";
import EventList from "./EventList";
import PastEventList from "./PastEvents";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-1">
      <div className="md:w-[27%] w-full p-5">
        <Calendar />
        <div className="border-b-2 h-auto border-[#F9FAFB] my-3"></div>
        <PastEventList />
      </div>
      <div className="hidden md:block  border-l-2 h-auto border-[#F9FAFB]"></div>
      <div className="md:w-[73%] p-5">
        <EventList />
      </div>
    </div>
  );
};

export default Layout;
