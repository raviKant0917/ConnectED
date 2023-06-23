import React, { useState } from "react";
import Products from "./Products";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

const List = (props) => {
    const data = props.data;
    return (
        <div className="products">
            {Object.keys(data).map((key, index) => (
                <>
                    {key === "all" ? (
                        ""
                    ) : (
                        <>
                            <h1>{key}</h1>
                            <div>
                                {data[key].length === 0 ? (
                                    <div>Nothing to show</div>
                                ) : (
                                    data[key].map((item) => (
                                        <Card
                                            id={item.id}
                                            image={item.image}
                                            owner={item.owner_name}
                                            product={item.product_name}
                                            hostel={item.hostel_name}
                                            rating={item.rating}
                                            rent={item.rent}
                                            available={item.available}
                                        />
                                    ))
                                )}
                            </div>
                        </>
                    )}
                </>
            ))}
        </div>
    );
};
let complete = [];

const Dashboard = () => {
    const data = Products();
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState("");
    const searchProducts = (text) => {
        let matches = data.all.filter((item) => {
            const regex = new RegExp(`^${text}`, "gi");
            return (
                item.owner_name.match(regex) || item.product_name.match(regex)
            );
        });
        return matches;
    };

    return (
        <div className="dashboard">
            <div className="search">
                <input
                    type="text"
                    placeholder="&#x1F50E; Search"
                    onInput={(e) => {
                        complete = searchProducts(e.target.value);
                        setSearch(e.target.value);
                    }}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                <button type="submit">Submit</button>
            </div>

            {focus && (
                <div id="autocomplete">
                    {complete.map((item) => (
                        <Link to={item.id}>
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.product_name}
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <span>
                                {item.product_name}
                                <br />
                                Owner: {item.owner_name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
            <List data={data} />
        </div>
    );
};

export default Dashboard;
