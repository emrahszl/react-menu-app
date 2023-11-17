import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { RecipeCrudOperationsProvider } from "./context/RecipeCrudOperationsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { HomePage } from "./pages/HomePage/HomePage";
import { AddRecipePage } from "./pages/AddRecipePage/AddRecipePage";
import { Navbar } from "./components/navigationBar/Navbar";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./services/PrivateRoute";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <ThemeProvider>
      <RecipeCrudOperationsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/addrecipe"
              element={<PrivateRoute element={<AddRecipePage />} />}
            />
            <Route
              path="/settings"
              element={<PrivateRoute element={<Settings />} />}
            />
          </Routes>
        </BrowserRouter>
      </RecipeCrudOperationsProvider>
    </ThemeProvider>
  );
}

export default App;
