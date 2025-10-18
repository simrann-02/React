import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log(resId);

    // const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo);

    // const { name, cuisines, costForTwoMessage } =
    //     resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } =
    //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // const categories =
    //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    //         (c) =>
    //             c.card?.["card"]?.["@type"] ===
    //             "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //     );
    //console.log(categories);

    return (
        <div></div>
        // <div className="text-center">
        //     <h1 className="font-bold my-6 text-2xl">{name}</h1>
        //     <p className="font-bold text-lg">
        //         {cuisines.join(", ")} - {costForTwoMessage}
        //     </p>
        //     {/* categories accordions */}
        //     {categories.map((category, index) => (
        //         // controlled component
        //         <RestaurantCategory
        //             //key={category?.card?.card.title}
        //             //   data={category?.card?.card}
        //             key={index}
        //             showItems={index === showIndex ? true : false}
        //             setShowIndex={() => setShowIndex(index)}
        //             dummy={dummy}
        //         />
        //     ))}
        // </div>
    );
};

export default RestaurantMenu;