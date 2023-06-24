import React, { useState } from "react";
import "./Products.scss";
import { useLoaderData } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Error from "../Error/Error";

const Star = ({ n, set, rating }) => {
    return (
        <>
            <AiOutlineStar
                style={rating >= n && { display: "none" }}
                onClick={() => {
                    set(n);
                }}
            />
            <AiTwotoneStar
                style={rating < n && { display: "none" }}
                onClick={() => {
                    set(n);
                }}
            />
        </>
    );
};

const Product = () => {
    const data = useLoaderData();
    const [rating, setRating] = useState(0);
    if (data == null) {
        return <Error />;
    }
    return (
        <div className="product">
            <img src={data.image} alt={data.product_name} />
            <h1>{data.product_name}</h1>

            <div className="owner">
                <label>Owner Name: </label>&nbsp;&nbsp;&nbsp;
                <span>{data.owner_name}</span>
            </div>
            <br />
            <div className="hostel">
                <label>Hostel Name: </label>&nbsp;&nbsp;
                <span>{data.hostel_name}</span>
            </div>
            <br />
            <div className="description">
                <label>description: </label>
                <br />
                <span>{data.description}</span>
            </div>
            <br />

            <div className="give">
                <h3>Write a Review:</h3>
                <div>
                    Rating:
                    <span className="stars">
                        <Star n={1} set={setRating} rating={rating} />
                        <Star n={2} set={setRating} rating={rating} />
                        <Star n={3} set={setRating} rating={rating} />
                        <Star n={4} set={setRating} rating={rating} />
                        <Star n={5} set={setRating} rating={rating} />
                    </span>
                </div>
                <textarea placeholder="Type your Review..."></textarea>
                <br />
                <button>Submit</button>
            </div>
        </div>
    );
};

export const loadProduct = async ({ params }) => {
    if (params.id === "1") {
        return {
            id: 1,
            image: "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
            owner_name: "nikhil",
            product_name: "trimmer",
            hostel_name: "Neelkanth Boys Hostel",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat quis orci non lacinia. Phasellus id scelerisque justo. Nulla dignissim blandit diam, id blandit dui tempus sed. Nullam sed purus turpis. Pellentesque bibendum sed purus at ultricies. Nam tortor elit, interdum sit amet velit eu, finibus iaculis diam. Fusce id dignissim nibh. ",
            rating: "4.2",
            rent: true,
            available: false,
        };
    }
    return null;
};

export default Product;
