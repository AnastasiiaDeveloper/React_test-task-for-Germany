import React from "react";
import "./user.css"

const UserData = ({
  lastName,
  setLastName,
  firstName,
  setFirstName,
  email,
  setEmail,
  streetAddress,
  setStreetAddress,
}) => {
  return (
    <div className="userData">
      <p>Enter your personal data:</p>
      <label>Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        className="input"
      />
      <label>First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        className="input"
      />
      <label> Email </label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="input"
      />
      <label>Street Address</label>
      <input
        type="text"
        value={streetAddress}
        onChange={(e) => {
          setStreetAddress(e.target.value);
        }}
        className="input"
      />
    </div>
  );
};
export default UserData;
