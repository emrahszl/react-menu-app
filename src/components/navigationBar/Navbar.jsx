import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(theme === "dark");

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div
      className={`slider-container ${isToggled ? "dark" : "light"}`}
      onClick={handleToggle}
    >
      <div className="slider-button"></div>
    </div>
  );
};

export function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-logo">
          <a href="">Recipe Platform</a>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="addrecipe">Add Recipe</a>
            </li>
            <li>
              <a href="settings">About</a>
            </li>
            <li>
              <a
                href="login"
                onClick={isAuthenticated ? handleLogout : handleLogin}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </a>
            </li>
            <li>
              <ThemeSlider />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
