import React, { useState } from "react";
import "./profile.scss";
import { useLoaderData } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Profile = (props) => {
  const data = useLoaderData();
  const submiHandler=()=>{
    
  }
  

  const [show, setShow] = useState(false);

  const [info, setInfo] = useState({
    img: data.img,
    email: data.email,
    name: data.name,
    roll_no: data.roll_no,
    room_no: data.room_no,
    password: data.password,
    hostel_name: data.hostel_name,
    upi_id: data.upi_id,
  });

  return (
    <div className="profileWrapper">
      <form className="profile">
        <div>
          <h1>Profile</h1>
          <img src={data.img} alt="profile" />
          <div className="inputWrapper">
            <label for="name">Full Name</label>
            <input
              type="text"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, name: e.target.value };
                })
              }
              value={info.name}
            />
            <label for="roll_no">Roll no</label>
            <input
              type="text"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, roll_no: e.target.roll_no };
                })
              }
              value={info.roll_no}
            />
            <label for="room_no">Room No</label>
            <input
              type="text"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, room_no: e.target.room_no };
                })
              }
              value={info.room_no}
            />
            <label for="hostel_name">Hostel Name</label>
            <input
              type="text"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, hostel_name: e.target.hostel_name };
                })
              }
              value={info.hostel_name}
            />
          </div>
        </div>
      </form>
      <form className="login_info">
        <div>
          <h1>Personal Information</h1>
          <div className="inputWrapper">
            <label for="email">Email</label>
            <input
              type="email"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, email: e.target.email };
                })
              }
              value={info.email}
            />
            <label for="password">Password </label>
            <div className="password">
              <input
                type={show ? "text" : "password"}
                onInput={(e) =>
                  setInfo((prevState) => {
                    return { ...prevState, password: e.target.password };
                  })
                }
                value={info.password}
              />
              {!show && (
                <button onClick={() => setShow((prevState) => !prevState)}>
                  <AiFillEyeInvisible />
                </button>
              )}
              {show && (
                <button onClick={() => setShow((prevState) => !prevState)}>
                  <AiFillEye />
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
      <form className="upi_id">
        <div>
          <h1>UPI ID</h1>
          <div className="inputWrapper">
            <label for="upi_id">UPI ID</label>
            <input
              type="text"
              onInput={(e) =>
                setInfo((prevState) => {
                  return { ...prevState, upi_id: e.target.upi_id };
                })
              }
              value={info.upi_id}
            />
          </div>
        </div>
      </form>
      <button className="submit" onClick={submiHandler}>Save</button>
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
