import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../pages/LogIn/LogIn';
import Main from './../Layout/Main';
import Home from './../pages/Home/Home/Home';

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
                path:'/login',
                element:<LogIn></LogIn>
            }
        ]
    }
])

export default router;