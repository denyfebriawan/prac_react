import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import ErrorPage from "./Pages/404.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider  >
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
