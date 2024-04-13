import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // console.log("Header Called");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>
              Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
          <li><Link to="/grocery"> Grocery </Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
