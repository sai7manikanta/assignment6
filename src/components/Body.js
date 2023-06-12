import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6717121&lng=83.1893249&page_type=DESKTOP_WEB_LISTING"

    );
    const json=await data.json();
    console.log(json);
    setRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurant(json.data.cards[2].data.data.cards);
  };
  if (restaurants.length === 0){
    return <Shimmer/>;
  }
  return restaurants.length === 0?<Shimmer/>:(
    <>
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="Search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}}/>
          <button onClick={()=>{
            console.log(searchText);
            const filteredRestaurant=restaurants.filter((res)=>
            res.data.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}> Search</button>
        </div>
        <button
        className="filter-btn" onClick={()=>{
          const filteredList=restaurants.filter((res)=>res.data.avgRating>4);
          setRestaurants(filteredList);
        }}
        >Top Rated restaurants</button>
      </div>
    </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;