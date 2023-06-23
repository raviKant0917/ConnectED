import React, { useState } from "react";
import Card from "./Card/Card";
import { Link, useLoaderData } from "react-router-dom";
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
    const data = useLoaderData();
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

export const loadProduct = () => {
    return {
        boys: [
            {
                image: "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
                owner_name: "nikhil",
                product_name: "trimmer",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "4.2",
                rent: true,
                available: false,
            },
            {
                image: "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
                owner_name: "ravi",
                product_name: "perfume",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "3",
                rent: false,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
                owner_name: "rishabh",
                product_name: "cricket kit",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "5",
                rent: true,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
                owner_name: "Neeraj",
                product_name: "watch",
                hostel_name: "Kailash Boys Hostel",
                rating: "3",
                rent: false,
                available: true,
            },
            {
                image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
                owner_name: "aryan sharma",
                product_name: "cream",
                hostel_name: "Himadri Boys Hostel",
                rating: "4",
                rent: false,
                available: true,
            },
        ],
        girls: [
            {
                image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_3.jpg",
                owner_name: "gayatri",
                product_name: "makeup",
                hostel_name: "Ambika Girls Hostel",
                rating: 3,
                rent: false,
                available: true,
            },
            {
                image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_1.jpg",
                owner_name: "priyanka",
                product_name: "cream",
                hostel_name: "Parvati Girls Hostel",
                rating: 4.2,
                rent: false,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/81rAehGhpDL.jpg",
                owner_name: "tanisha",
                product_name: "bedsheet",
                hostel_name: "Aravali Girls Hostel",
                rating: 5,
                rent: false,
                available: true,
            },
            {
                image: "https://i.etsystatic.com/30542255/r/il/be38ba/4725322601/il_fullxfull.4725322601_c0wy.jpg",
                owner_name: "khusi",
                product_name: "dress",
                hostel_name: "Satpura Girls Hostel",
                rating: 4.5,
                rent: true,
                available: true,
            },
            {
                image: "https://img.faballey.com/images/Product/ILK00050Z/d3.jpg",
                owner_name: "madhu",
                product_name: "dress",
                hostel_name: "Ambika Girls Hostel",
                rating: 3,
                rent: true,
                available: false,
            },
        ],
        all: [
            {
                image: "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
                owner_name: "nikhil",
                product_name: "trimmer",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "4.2",
                rent: true,
                available: false,
            },
            {
                image: "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
                owner_name: "ravi",
                product_name: "perfume",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "3",
                rent: false,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
                owner_name: "rishabh",
                product_name: "cricket kit",
                hostel_name: "Neelkanth Boys Hostel",
                rating: "5",
                rent: true,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
                owner_name: "Neeraj",
                product_name: "watch",
                hostel_name: "Kailash Boys Hostel",
                rating: "3",
                rent: false,
                available: true,
            },
            {
                image: "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
                owner_name: "aryan sharma",
                product_name: "cream",
                hostel_name: "Himadri Boys Hostel",
                rating: "4",
                rent: false,
                available: true,
            },
            {
                image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_3.jpg",
                owner_name: "gayatri",
                product_name: "makeup",
                hostel_name: "Ambika Girls Hostel",
                rating: 3,
                rent: false,
                available: true,
            },
            {
                image: "https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_1.jpg",
                owner_name: "priyanka",
                product_name: "cream",
                hostel_name: "Parvati Girls Hostel",
                rating: 4.2,
                rent: false,
                available: true,
            },
            {
                image: "https://m.media-amazon.com/images/I/81rAehGhpDL.jpg",
                owner_name: "tanisha",
                product_name: "bedsheet",
                hostel_name: "Aravali Girls Hostel",
                rating: 5,
                rent: false,
                available: true,
            },
            {
                image: "https://i.etsystatic.com/30542255/r/il/be38ba/4725322601/il_fullxfull.4725322601_c0wy.jpg",
                owner_name: "khusi",
                product_name: "dress",
                hostel_name: "Satpura Girls Hostel",
                rating: 4.5,
                rent: true,
                available: true,
            },
            {
                image: "https://img.faballey.com/images/Product/ILK00050Z/d3.jpg",
                owner_name: "madhu",
                product_name: "dress",
                hostel_name: "Ambika Girls Hostel",
                rating: 3,
                rent: true,
                available: false,
            },
        ],
    };
};

export default Dashboard;
