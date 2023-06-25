import React from "react";
import "./profile.scss";
import { useLoaderData } from "react-router-dom";

const Profile = (props) => {
  const data = useLoaderData();
  return (
    <div className="profileWrapper">
      <form className="profile">
        <div>
          <h1>Profile</h1>
          <img src={data.img} alt="profile" />
          <div className="inputWrapper">
            <label for="name">Full Name</label>
            <input type="text" value={data.name} />
            <label for="roll_no">Roll no</label>
            <input type="text" value={data.roll_no} />
            <label for="room_no">Room No</label>
            <input type="text" value={data.room_no} />
            <label for="hostel_name">Hostel Name</label>
            <input type="text" value={data.hostel_name} />
          </div>
        </div>
      </form>
      <form className="login_info">
        <div>
          <h1>Personal Information</h1>
          <div className="inputWrapper">
            <label for="email">Email</label>
            <input type="email" value={data.email} />
            <label for="password">Password</label>
            <input type="password" value={data.password} />
          </div>
        </div>
      </form>
      <form className="upi_id">
        <div>
          <h1>UPI ID</h1>
          <div className="inputWrapper">
            <label for="upi_id">UPI ID</label>
            <input type="text" value={data.upi_id} />
          </div>
        </div>
      </form>
    </div>
  );
};

export const loadProfile = () => {
  return {
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    email: "21bcs007@nith.ac",
    name: "rishabh",
    password: "rishabh7",
    roll_no: "21bcs007",
    room_no: "A-308",
    hostel_name: "Neelkanth boys hostel",
    upi_id: "739425694@paytm",
  };
};

export default Profile;
