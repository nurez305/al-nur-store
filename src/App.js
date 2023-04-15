import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartCheckout from "./Components/CartCheckout";
import HomePage from "./Components/HomePage";
import RootLayout from "./Components/Root";

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <RootLayout />,
      children: [
        {
          path: "/", element: <HomePage />
        },
        {
          path: "/cart", element: <CartCheckout />
        }
      ]
  } 
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
