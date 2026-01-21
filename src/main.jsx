import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import { AboutUsView } from "./views/AboutUsView.jsx";
import Layout from "./views/Layout.jsx";
import { SignupView } from "./views/SignupView.jsx";
import PaymentView from "./views/PaymentView.jsx";
import LoginView from "./views/LoginView.jsx";
import { ContactView } from "./views/ContactView.jsx";
import CollectionView from "./views/Collection/CollectionView.jsx";
import ProductView from "./views/Collection/ProductView.jsx";
import ProductDetailView from "./views/Collection/ProductDetailView.jsx";
import ConfirmOrderView from "./views/ConfirmOrderView.jsx";
import DashBoardView2 from "./views/DashBoardView2.jsx";
import Testpang from "./views/Testpang.jsx";
import CartPage from "./views/CartPage.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectRoute from "./components/ProtectRoute.jsx";
import GuestRoute from "./components/GuestRoute.jsx";
import ProfilePage from "./views/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found </h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomeView /> },
          { path: "collection", element: <CollectionView /> },
          { path: "collection/:id", element: <ProductView /> },
          { path: "products/:id", element: <ProductDetailView /> },
          { path: "dashboard", element: <DashBoardView2 /> },
          { path: "about", element: <AboutUsView /> },
          { path: "contact", element: <ContactView /> },
          {
            path: "login",
            element: (
              <GuestRoute>
                <LoginView />
              </GuestRoute>
            ),
          },
          {
            path: "signup",
            element: (
              <GuestRoute>
                <SignupView />
              </GuestRoute>
            ),
          },
          { path: "payment", element: <PaymentView /> },
          { path: "order", element: <ConfirmOrderView /> },
          { path: "dashboard", element: <DashBoardView2 /> },
          { path: "checkout", element: <ConfirmOrderView /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "carttest", element: <CartPage /> },
          {
            path: "pang-test",
            element: (
              <ProtectRoute>
                <Testpang />
              </ProtectRoute>
            ),
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
);
