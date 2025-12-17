import { useNavigate } from "react-router-dom";
import { NAVABR_ITEMS } from "../constants/constant";

export const Navbar = () => {
  const navigation = useNavigate();
  const handleNavigation = (link) => {
    navigation(link);
  };
  return (
    <ul className="flex mx-24 py-5 gap-4">
      {NAVABR_ITEMS.map((navItem, index) => (
        <li
          key={index}
          className="cursor-pointer text-blue-500 font-semibold hover:bg-[#fff] hover:text-[#745BE7] p-1 rounded"
          onClick={() => handleNavigation(navItem?.link)}
        >
          {navItem?.name}
        </li>
      ))}
    </ul>
  );
};
