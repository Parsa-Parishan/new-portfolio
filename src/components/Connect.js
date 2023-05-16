import React, { useEffect, useState } from "react";

export default function Connect() {
  const [appear, setApper] = useState(false);
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setEmail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const location = window.location.hostname;
    console.log(email);
    let emailBody = {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      let response = await fetch(`http://${location}:3000/send`, emailBody);
      console.log(response);
      if (!response.ok) {
        throw new Error("bad request");
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setEmail({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
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
              <input
                type="text"
                id="name"
                required
                placeholder="Name"
                name="name"
                value={email.name}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="text"
                id="email"
                required
                placeholder="Email"
                name="email"
                value={email.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="subject">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Subject"
              name="subject"
              value={email.subject}
              onChange={handleChange}
            />
          </div>
          <div className="message">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              type="text"
              id="message"
              required
              placeholder="Message"
              name="message"
              value={email.message}
              onChange={handleChange}
            />
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
