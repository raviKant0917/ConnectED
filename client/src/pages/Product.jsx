import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Review, Request } from "../Components";
import { displayRazor, getProduct } from "../Components/httpRequest";
import { useParams } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";

const Product = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [Loading, setLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        getProduct(id, setData, setLoading);
    }, []);
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    if (data == null) {
        return <Error />;
    }

    const chatHandler = () => {
        navigate("/chats");
    };

    return (
        <>
            {!Loading && (
                <div className="product">
                    <img src={data.image} alt={data.product_name} />
                    <h1>{data.product_name}</h1>
                    <div className="buy">
                        <button
                            onClick={() => {
                                displayRazor(data, user);
                            }}
                        >
                            Buy Now
                        </button>
                        <div>OR</div>
                        <button onClick={chatHandler}>Chat with Owner</button>
                    </div>

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
                    {data.rent && (
                        <>
                            <div className="give">
                                <h3>Write a Review:</h3>
                                <div>
                                    Rating:
                                    <span className="stars">
                                        <Star
                                            n={1}
                                            set={setRating}
                                            rating={rating}
                                        />
                                        <Star
                                            n={2}
                                            set={setRating}
                                            rating={rating}
                                        />
                                        <Star
                                            n={3}
                                            set={setRating}
                                            rating={rating}
                                        />
                                        <Star
                                            n={4}
                                            set={setRating}
                                            rating={rating}
                                        />
                                        <Star
                                            n={5}
                                            set={setRating}
                                            rating={rating}
                                        />
                                    </span>
                                </div>
                                <textarea
                                    placeholder="Type your Review..."
                                    onInput={(e) => setReview(e.target.value)}
                                ></textarea>
                                <br />
                                <button
                                    onClick={() => {
                                        Request.giveRating(
                                            { rating, review },
                                            id
                                        );
                                        getProduct(id, setData, setLoading);
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                            <Review reviews={data.reviews} />
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Product;
