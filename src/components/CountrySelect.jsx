import { useState } from "react";

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select a country");

  const countries = [
    "Thailand",
    "United States",
    "Japan",
    "China",
    "Hongkong",
    "Vietnam",
  ];

  return (
    <div className="relative w-full shadow-sm rounded-sm">
      {/* ส่วนแสดงผลที่กด */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-2 border-gray-300 rounded-sm cursor-pointer hover:border-gray-400 transition-all"
      >
        <span
          className={selected === "Select a country" ? "text-gray-400" : ""}
        >
          {selected}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* รายการตัวเลือก */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          {countries.map((country) => (
            <div
              key={country}
              onClick={() => {
                setSelected(country);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
