import React, {useState} from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode.jsx";
import Button from "../Shared/Button.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/FilterProducts",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup, handleLoginPopup }) => {
  const current_user = useSelector(state => state.user.currentUser);
  const shoppingCart = useSelector(state => state.cart.shoppingCart);
  const [searchContent, setSearchContent] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const SignOut = () => {
    dispatch(clearUser());
  }
  const getInfo = async () => {
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    if (searchContent.trim()) {
      navigate(`/searchResult?query=${encodeURIComponent(searchContent)}`);
      setSearchContent("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary font-semibold tracker-widest text-2xl uppercase sm:text-3xl">
              TechCompare
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <Link to={data.link}>
                    <span
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                      {" "}
                      {data.name}
                    </span>
                    </Link>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-7">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <form onSubmit={handleSearchSubmit}>
                <input onChange={(e) => setSearchContent(e.target.value)}
                       type="text" value={searchContent}
                       placeholder="Search"
                       className="search-bar"
                />
                <IoMdSearch
                  className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1.5 duration-200"/>
              </form>
            </div>

            {/* Order-button section */}
            <Link to="/ShoppingCart">
              <button className="relative p-3">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {shoppingCart.length}
                </div>
              </button>
            </Link>
            {/* Dark Mode section */}
            <div>
              <DarkMode/>
            </div>

            {/* Account section */}
            {current_user.isLogin && (
              <div>
                {/* Menu Items */}
                <div className="hidden lg:block">
                  <ul className="flex items-center gap-4">
                    {/* Dropdown  */}
                    <li className="relative cursor-pointer group">
                      <a
                        href="#"
                        className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                      >
                        My Account
                        <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                      </a>
                      {/* Dropdown Links */}
                      <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                        <ul className="space-y-2">
                          <li>
                            <span onClick={getInfo} className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                              Account Info
                            </span>
                            <Link to='/Wishlist'>
                            <span
                                className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                              My Wishlist
                            </span>
                            </Link>
                            <span
                                className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                              Settings
                            </span>
                            <span onClick={SignOut}
                                  className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                              Sign Out
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {!current_user.isLogin && (
                <Button className="relative"
                      text="Login"
                      bgColor={"bg-primary"}
                      textColor={"text-white"} handler={handleLoginPopup}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
