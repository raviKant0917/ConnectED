import React from "react";
import "./Contacts.scss";
const Contacts = ({ data, set }) => {
    return (
        <div className="contacts">
            {Object.keys(data).map((key, i) => (
                <div className="contact" key={i} onClick={() => set(key)}>
                    <img src={data[key].image} alt={key} />
                    <div className="contact-info">
                        <h4>{key}</h4>
                        <div>
                            {data[key].chats.length !== 0 &&
                                data[key].chats[data[key].chats.length - 1]
                                    .text}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
