import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
    const resData = props.resData;
    const navigate = useNavigate();

    return (
        <div
            className="w-65 border-solid border-1 p-4 rounded-sm cursor-pointer"
            onClick={() => navigate("/restaurant/" + resData.info.id)}
        >
            <img src={CDN_URL + resData.info.cloudinaryImageId} alt="Restaurant" />
            <p>{resData.info.name}</p>
            <div>
                <p>{resData.info.avgRating}</p>
            </div>
            <p>time</p>
        </div>
    );
};

export default RestaurantCard;
