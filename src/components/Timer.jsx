import { useEffect, useState } from "react";

export default function Timer({ endDate }) {
  const calculateTimeLeft = () => {
    const diff = new Date(endDate) - new Date();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      expired: false,
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (time.expired) {
    return (
      <div className="text-lg font-semibold text-white">
        Promotion ended
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-white">
      <TimeBox label="Days" value={time.days} />
      <TimeBox label="Hours" value={time.hours} />
      <TimeBox label="Min" value={time.minutes} />
      <TimeBox label="Sec" value={time.seconds} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div
      className="
        flex flex-col items-center
        bg-white/15 backdrop-blur
        px-3 py-2 sm:px-4 sm:py-3
        rounded-md
        min-w-16 sm:min-w-18
        shadow-md
      "
    >
      <span className="text-xl sm:text-2xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
