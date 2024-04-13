import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockdata";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [searhText, setsearchText] = useState("");
  // const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    // fetchData();
    // console.log("UseEffect Called");
  }, []);

  // console.log("Body Called");

  const fetchData = async () => {
    //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=432976&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    //const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.681711298285776&lng=75.83385474979877&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();
    // console.log(json.data.card[1].card.card.info.);
    // json.data.cards[2].card.card.info.
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //   async function fetchData() {
  //     const url = 'https://favoritefoodapi.p.rapidapi.com/food/api/v1/favorites';
  //     const options = {
  //         method: 'GET',
  //         headers: {
  //             'X-RapidAPI-Key': 'e947d63fe8msh6871c09688e12a0p1cfef4jsn78fa0d2355b8',
  //             'X-RapidAPI-Host': 'favoritefoodapi.p.rapidapi.com'
  //         }
  //     };

  //     try {
  //         const response = await fetch(url, options);
  //         const result = await response.json();
  //         console.log(result);
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

  //Conditial Rendering:- here we are rendering the Shimmer component on the basis of the condition of,
  // its nothing but the conditial rendering.
  // if(listOfRes === 0) {
  //   return <Shimmer/>;
  // }
  // how can we combine conditial rendering and this belwo returned code in one ?? by using ternary operator its possible.


  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return (<h1>
        Looks like you are online !! check your internet connection ⁉ 
      </h1>)
  }


  return listOfRes === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="input"
            type="text"
            placeholder="search-box"
            value={searhText}
            onChange={(e) => {
              setsearchText(e.target.value);
              // console.log(searhText);
              
            }}
          />
          <button className="search-btn" onClick={() => {
            // filter the resto cards and update the UI & search text
            // console.log(searhText);
            const filteredRestaurant = listOfRes.filter((res) => res.card.card.info.name.toLowerCase().includes(searhText.toLowerCase()));
            setListOfRes(filteredRestaurant);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //logic of filter:-
            const filteredlist = resList.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            // console.log("Button Clicked");
            console.log(filteredlist);
            setListOfRes(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;