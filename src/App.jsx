import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./ui/Home"
import Menu, { loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order from './features/order/Order'
import './App.css'
import AppLayout from './ui/AppLayout'

// we define our routes here, each object in the array is a route
const router = createBrowserRouter([
  // parent route will be AppLayout, all other routes will be children
  {
    element: <AppLayout />,
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
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:orderId',
        element: <Order />
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
