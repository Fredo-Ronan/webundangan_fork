// components/CountdownTimer.js
import React from "react";
import Countdown from "react-countdown";
import moment from "moment-timezone";

const Completionist = () => <span className="text-red-500">Waktu Habis!</span>;

const CountdownTimer = ({ date }) => {
  const targetDate = moment.tz(date, "Asia/Jakarta").toDate();
  return (
    <Countdown
      date={targetDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return (
            <div className="flex space-x-1">
              <div className="flex flex-col h-16 w-16 bg-cream text-pink-900 rounded-lg shadow-2xl items-center">
                <span className="text-2xl font-bold">{days}</span>
                <span>Days</span>
              </div>
              <div className="flex flex-col h-16 w-16 bg-cream text-pink-900  rounded-lg shadow-2xl items-center">
                <span className="text-2xl font-bold">{hours}</span>
                <span>Hours</span>
              </div>
              <div className="flex flex-col h-16 w-16 bg-cream text-pink-900  rounded-lg shadow-2xl items-center">
                <span className="text-2xl font-bold">{minutes}</span>
                <span>Minutes</span>
              </div>
              <div className="flex flex-col h-16 w-16 bg-cream text-pink-900  rounded-lg shadow-2xl items-center">
                <span className="text-2xl font-bold">{seconds}</span>
                <span>Seconds</span>
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default CountdownTimer;
