import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import {action as updateOrderAction} from './features/order/UpdateOrder';
import './App.css'
import AppLayout from './ui/AppLayout'

// we define our routes here, each object in the array is a route
const router = createBrowserRouter([
  // parent route will be AppLayout, all other routes will be children
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // child routes
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        // connect loader() function with the route /menu
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        // connect the URL with the action from CreateOrder component
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
