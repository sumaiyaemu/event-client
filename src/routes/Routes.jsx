import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ExploreEvent from "../pages/ExploreEvent/ExploreEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EventDetails from "../pages/EventDetails/EventDetails";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import Login from "../pages/Login/Login";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/explore',
                element: <ExploreEvent></ExploreEvent>,
            },
            {
                path: '/event/:id',
                element: <EventDetails></EventDetails>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/create',
                element: <CreateEvent></CreateEvent>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);
export default routes;