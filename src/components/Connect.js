import React, { useEffect, useState } from "react";

export default function Connect() {
  const [appear, setApper] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = {
      name: e.target[0].value,
      emailAddress: e.target[1].value,
      subject: e.target[2].value,
      message: e.target[3].value,
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 2170) {
        setApper(() => true);
      }
    });
  }, []);
  return (
    <div className={`connect ${appear && "form-transition"}`}>
      <div className="connect-header">
        <h1>Get in Touch</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="name-email">
            <div className="name">
              <label htmlFor="name">FULL NAME</label>
              <input type="text" id="name" required placeholder="Name" />
            </div>
            <div className="email">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="text" id="email" required placeholder="Email" />
            </div>
          </div>
          <div className="subject">
            <label htmlFor="subject">SUBJECT</label>
            <input type="text" id="subject" required placeholder="Subject" />
          </div>
          <div className="message">
            <label htmlFor="message">MESSAGE</label>
            <textarea type="text" id="message" required placeholder="Message" />
          </div>
          <div className="button">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
