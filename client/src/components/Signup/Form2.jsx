import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";

const Form2 = ({ click, obj, set }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        let res;
        try {
            res = await fetch(
              "https://connect-fnyb.onrender.com/users/signup",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                  name: obj.name,
                  email: obj.email,
                  phoneNumber: obj.phone_number,
                  address: obj.address,
                  password: obj.password,
                  confirmPassword: obj.confirm_password,
                }),
              }
            );
        } catch (err) {
            console.log(err);
            alert(err);
            return;
        }

        const response = await res.json();
        dispatch(
            authActions.login({
                profileImage:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnW0NUpcrZcGZeUJ4e50ZLU8ugS9GPPoqww&usqp=CAU",
                name: obj.name,
                address: obj.address,
                phoneNumber: obj.phone_number,
                email: obj.email,
                password: obj.password,
                cart: {
                    sell: [],
                    requested: [],
                    rented: [],
                    bought: [],
                },
            })
        );
        if (response.status === "success") {
            Navigate("/");
        }
    };

    return (
        <form onSubmit={submitHandler} className="form-2">
            <label htmlFor="">Name</label>
            <input
                type="text"
                value={obj.name}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, name: e.target.value };
                    })
                }
                placeholder="Type your Name"
            />
            <label htmlFor="">Phone Number.</label>
            <input
                type="number"
                value={obj.phone_number}
                min={1000000000}
                max={9999999999}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, phone_number: e.target.value };
                    })
                }
                placeholder="Type your Room no."
            />
            <label htmlFor="">Address</label>
            <input
                type="text"
                value={obj.address}
                onInput={(e) =>
                    set((t) => {
                        return { ...t, address: e.target.value };
                    })
                }
                placeholder="Type your Hostel name"
            />
            <div className="box">
                <input type="submit" className="btn" />
                <button className="back" onClick={click}>
                    Back
                </button>
            </div>
        </form>
    );
};

export default Form2;
