import React, { useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const Navigate = useNavigate();
    const [details, setDetails] = useState({ email: "", password: "" });
    const [check, setCheck] = useState({ email: false, password: false });
    const[show,SetShow]=useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();

        if (details.email === "") {
            setCheck((t) => {
                return { ...t, email: true };
            });
        }
        if (details.password === "") {
            setCheck((t) => {
                return { ...t, password: true };
            });
        }
        if (details.email === "" || details.password === "") {
            return;
        }

        const res = await fetch("http://localhost:8000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: details.email,
                password: details.password,
            }),
        });

        const response = await res.json();
        console.log(response);
        if (response.status === "success") {
            Navigate("/");
        }
    };

    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="">
          Email&nbsp;
          {check.email && (
            <span style={{ color: "red" }}>Email can't be empty</span>
          )}
        </label>
        <input
          type="email"
          value={details.email}
          onInput={(e) => {
            setDetails((t) => {
              return { ...t, email: e.target.value };
            });
            setCheck((t) => {
              return { ...t, email: false };
            });
          }}
          placeholder="Type your Email"
          autoComplete="auto"
        />
        <label htmlFor="">
          Password&nbsp;
          {check.password && (
            <span style={{ color: "red" }}>Password can't be empty</span>
          )}
        </label>
        <div className="password">
          <input
            type={show ? "text" : "password"}
            value={details.password}
            onInput={(e) =>
              setDetails((t) => {
                return { ...t, password: e.target.value };
              })
            }
            placeholder="Type your Password"
            autoComplete="auto"
          />
          {!show && (
            <button onClick={() => SetShow((prevState) => !prevState)}>
              <AiFillEyeInvisible />
            </button>
          )}
          {show && (
            <button onClick={() => SetShow((prevState) => !prevState)}>
              <AiFillEye />
            </button>
          )}
        </div>
        <input type="submit" />
        <Link to={"/"} style={{ color: "skyblue" }}>
          Forget Password?
        </Link>
        {/* <span>OR</span> */}
      </form>
    );
};

export default Form;
