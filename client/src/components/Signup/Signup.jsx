import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.scss";
import Form1 from "./Form1";
import Form2 from "./Form2";

const Signup = () => {
    const [number, setNumber] = useState(false);
    const nextPage = () => {
        setNumber((prevState) => !prevState);
    };
    return (
        <>
            <div className="signup">
                <h1>SignUp</h1>
                <div className="slides">
                    <div className={`circle active`}>1</div>
                    <div
                        className="line "
                        style={
                            !number
                                ? { border: "0.3rem solid #ffffff" }
                                : { border: "0.3rem solid skyblue" }
                        }
                    />
                    <div className={`circle ${number && "active"}`}>2 </div>
                </div>
                {number ? (
                    <Form2 click={nextPage} />
                ) : (
                    <Form1 click={nextPage} />
                )}
            </div>
            {!number && (
                <div className="other2">
                    Already a user? <Link to="/login"> login</Link>
                </div>
            )}
        </>
    );
};

export default Signup;
