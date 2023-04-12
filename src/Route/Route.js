import { createBrowserRouter } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import LogIn from '../pages/LogIn/LogIn';
import Main from './../Layout/Main';
import Home from './../pages/Home/Home/Home';
import SignUp from './../pages/SignUp/SignUp';
import Orders from '../pages/Orders/Orders';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,

            }
        ]
    },
    {

    }

])

export default router;