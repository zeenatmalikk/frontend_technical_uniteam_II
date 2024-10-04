import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, subMonths, isSameDay, isSameMonth } from "date-fns";
import PaginationBtn from "./PaginationBtn";
import { events } from "../constants";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const renderDayContents = (day: number, date: Date) => {
    const dateString = `${String(day).padStart(2, "0")}/${String(
      date.getMonth() + 1
    ).padStart(2, "0")}/${date.getFullYear()}`;

    // check if there are any events on this date
    const hasEvent = events.some((event) => event.date === dateString);

    return (
      <div className="relative">
        <span>{day}</span>
        {hasEvent && (
          <span className="absolute bottom-[-5px] right-[50%] left-[50%] w-1 h-1 bg-primary rounded-full"></span>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-sans font-bold text-lg">
            {startDate.toLocaleString("default", { month: "long" })}
          </span>
          <span className="text-secondary font-medium text-lg">
            {` ${startDate.getFullYear()}`}
          </span>
        </div>

        <div className="flex gap-2">
          <PaginationBtn
            onLeftClick={() => setStartDate(subMonths(startDate, 1))}
            next={false}
          />
          <PaginationBtn
            onRightClick={() => setStartDate(addMonths(startDate, 1))}
            next={true}
          />
        </div>
      </div>
      <div className="mt-4">
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          inline
          renderDayContents={renderDayContents}
          calendarClassName="border-0 w-full"
          weekDayClassName={() =>
            "text-secondary font-sans font-bold text-[14px]"
          }
          dayClassName={(date) => {
            const isToday = isSameDay(date, new Date());
            // compare with selected month
            const inCurrentMonth = isSameMonth(date, startDate);

            return isToday
              ? "bg-primary text-white rounded-full font-sans text-[15px]"
              : inCurrentMonth
              ? "text-[15px] rounded-full font-sans font-semibold"
              : "text-gray-400 text-[15px] rounded-full font-sans font-semibold";
          }}
          dateFormatCalendar=" "
        />
      </div>
    </div>
  );
};

export default Calendar;
