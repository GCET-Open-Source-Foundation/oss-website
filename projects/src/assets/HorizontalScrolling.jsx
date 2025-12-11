import React, { useRef } from "react";

const HorizontalScrollList = ({ title, items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      <p className="text-2xl mb-2">{title}</p>
      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 h-10 w-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 py-2 px-12 h-40"
        >
          {items.map((item, i) => (
          <div
            key={i}
            className="w-40 flex-shrink-0 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition flex flex-col items-center justify-center text-center p-4"
          >
            <p className="font-medium text-gray-800">{item.name}</p>
            <span className="text-sm text-gray-500 mt-1">{item.roll}</span>
          </div>

          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 h-10 w-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollList;
