import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu.js";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
