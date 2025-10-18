import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);

            if (!response.ok) {
                console.log("error occurred");
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Log the raw response text for debugging
            const responseText = await response.text();
            console.log('Raw response:', responseText);
            
            // Try parsing the response
            const jsonResponse = JSON.parse(responseText);
            setResInfo(jsonResponse.data);
            console.log(jsonResponse);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;