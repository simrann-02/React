import { LOGO_URL } from "../Utils/constants";
const Header = () => {
    return (
    <div className="flex justify-between bg-amber-100 shadow-2xs">
        <img
        className="w-24"
            src={LOGO_URL}
        />
        <ul className="flex gap-4 items-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">contact Us</li>
            <li className="cursor-pointer">Cart</li>
        </ul>
    </div>
    )
}

export default Header;