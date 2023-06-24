import React from "react";

const Form2 = (props) => {
    return (
        <form className="form-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Type your Name" />
            <label htmlFor="">Roll no.</label>
            <input type="text" placeholder="Type your Roll no." />
            <label htmlFor="">Room no.</label>
            <input type="text" placeholder="Type your Room no." />
            <label htmlFor="">Hostel name</label>
            <input type="text" placeholder="Type your Hostel name" />
            <div className="box">
                <input type="submit" className="btn" />
                <button className="back" onClick={props.click}>
                    Back
                </button>
            </div>
        </form>
    );
};

export default Form2;
