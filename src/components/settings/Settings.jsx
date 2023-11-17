import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Settings.css";
import axios from "axios";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setUser(response.data));
      console.log(response);
    };

    getUserProfile();
  }, []);

  return (
    <div className="setttings">
      <div className="theme-settings">
        <div>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
      <div className="user-card">
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
        <p>{user.role}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Settings;
