// import { useNavigate } from "react-router-dom";
// import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
    const resData = props.resData;
    // const navigate = useNavigate();
    // console.log(resData.info.id);

    return (
        <div
            className="w-65 border-solid border-1 p-4 rounded-sm cursor-pointer"
        >
            <img src={null} alt="Restaurant" />
            <p>{resData.info.name}</p>
            <div>
                <p>{resData.info.avgRating}</p>
            </div>
            <p>{resData.info.avgRating}</p>
        </div>
    );
};

export default RestaurantCard;
