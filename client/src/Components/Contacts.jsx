import React from "react";

const Contacts = ({ online, data, set }) => {
    return (
        <div className="contacts">
            {data.map((key, i) => (
                <div className="contact" key={i} onClick={() => set(i)}>
                    <img src={key.image} alt={key.name} />
                    <div className="contact-info">
                        <h4>{key.name}</h4>
                        {console.log(
                            online.forEach((element) => {
                                if (element.userId === key.userId) {
                                    return "online";
                                }
                            })
                        )}
                        {online.forEach((element) => {
                            if (element.userId === key.userId) {
                                return <div>online</div>;
                            }
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contacts;
