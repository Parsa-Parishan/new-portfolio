import React, { useState } from "react";

export default function Extra({ setTransoform }) {
  const newDate = new Date();
  const stringDate = newDate.toString().split(" ");

  const handleEnter = () => {
    setTransoform(true);
  };

  const handleLeave = () => {
    setTransoform(false);
  };

  return (
    <>
      <div className="extra">
        <div
          onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
        >
          <span className="day">{Number(stringDate[2])}</span>
          <span className="month">
            {stringDate[1]}
            <span className="work">
              available <br />
              to work
            </span>
            <span className="fake">FAKE AVAILABILITY</span>
          </span>
        </div>
      </div>
    </>
  );
}
