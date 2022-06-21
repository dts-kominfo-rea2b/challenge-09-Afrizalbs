// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ nama, phone, email, img }) => {
  return (
    <>
      <div className="wrapper">
        <img src={img} alt="" className="img" />
        <div className="content">
          <h3 className="name">{nama}</h3>
          <p className="phoneNumber"> {phone}</p>
          <p className="email">{email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
