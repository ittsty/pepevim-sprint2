export default function Timer() {

  return (
    <div className="flex gap-4 text-white">
      <TimeBox label="Days" value={3} />
      <TimeBox label="Hours" value={4} />
      <TimeBox label="Min" value={16} />
      <TimeBox label="Sec" value={18} />
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center bg-white/15 backdrop-blur px-4 py-3 rounded-md min-w-17.5 shadow-md">
      <span className="text-2xl font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
}
