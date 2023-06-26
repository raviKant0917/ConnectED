import React from 'react';
import { useLoaderData } from 'react-router-dom'; 
import Card from "./Card/Card";
import "./search2.scss"


const Search2 = () => {

  const data = useLoaderData();

  return (
    <div className="searchWrapper">
      {Object.keys(data).map((key, i) => (
        <div key={i}>
          <h1>
            <span className="Heading">Product for {key}:</span>
          </h1>
          <div className="cardWrapper">
            {data[key].length === 0 ? (
              <div>Nothing to show</div>
            ) : (
              data[key].map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  image={item.image}
                  owner={item.owner_name}
                  product={item.product_name}
                  days={item.days}
                  rent={item.rent}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export const searchLoader =()=>{
return{
     trimmer: [
      {
        id: 1,
        image:
          "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
        owner_name: "nikhil",
        product_name: "trimmer",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "4.2",
        rent: true,
        available: false,
        days: "10",
      },
      {
        id: 1,
        image:
          "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
        owner_name: "ravi",
        product_name: "perfume",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "3",
        rent: false,
        available: true,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
        owner_name: "rishabh",
        product_name: "cricket kit",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "5",
        rent: true,
        available: true,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
        owner_name: "Neeraj",
        product_name: "watch",
        hostel_name: "Kailash Boys Hostel",
        rating: "3",
        rent: false,
        available: true,
      },
      {
        id: 1,
        image:
          "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
        owner_name: "aryan sharma",
        product_name: "cream",
        hostel_name: "Himadri Boys Hostel",
        rating: "4",
        rent: false,
        available: true,
      },
    ],
    speaker:[
      {
        id: 1,
        image:
          "https://pyxis.nymag.com/v1/imgs/bdc/eae/6151a14aa22cce4d1797b3e3b54c749eaa-Phillips-Norelco.2x.rdeep-vertical.w245.jpg",
        owner_name: "nikhil",
        product_name: "trimmer",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "4.2",
        rent: true,
        available: false,
        days: "10",
      },
      {
        id: 1,
        image:
          "https://momspotted.com/wp-content/uploads/2018/09/AXE-Products.jpg",
        owner_name: "ravi",
        product_name: "perfume",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "3",
        rent: false,
        available: true,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61vR3xLS32L.jpg",
        owner_name: "rishabh",
        product_name: "cricket kit",
        hostel_name: "Neelkanth Boys Hostel",
        rating: "5",
        rent: true,
        available: true,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/714pWQP0+JL.jpg",
        owner_name: "Neeraj",
        product_name: "watch",
        hostel_name: "Kailash Boys Hostel",
        rating: "3",
        rent: false,
        available: true,
      },
      {
        id: 1,
        image:
          "https://im.idiva.com/luxury/photogallery/2013/May/beauty_and_the_boys_the_best_products_for_men_thumb.gif",
        owner_name: "aryan sharma",
        product_name: "cream",
        hostel_name: "Himadri Boys Hostel",
        rating: "4",
        rent: false,
        available: true,
      },
    ],
}
}

export default Search2;