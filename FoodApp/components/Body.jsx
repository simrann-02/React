import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { MENU_API } from "../Utils/constants";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    MENU_API
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonResponse = await response.json();
                setRestaurants(jsonResponse.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
                console.log(jsonResponse);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="m-2">
            <div className="flex gap-4">
                <input className="border border-solid rounded-lg" type="text" onChange={(e) => { setSearchText(e.target.value) }} value={searchText}></input>
                <button className="cursor-pointer bg-gray-400  px-4 p-1 rounded-lg" type="submit">Search</button>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
                {restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;
