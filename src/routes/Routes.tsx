import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "homePage", element: <HomePage /> },
      { path: "userPage", element: <UserPage /> },
    ],
  },
]);
