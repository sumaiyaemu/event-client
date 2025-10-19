import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ExploreEvent from "../pages/ExploreEvent/ExploreEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EventDetails from "../pages/EventDetails/EventDetails";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import OnlineEvent from "../pages/OnlineEvent/OnlineEvent";
import VenueEvent from "../pages/VenueEvent/VenueEvent";
import OnlineTicket from "../pages/OnlineTicket/OnlineTicket";
import VenueTicket from "../pages/VenueTicket/VenueTicket";


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
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/create',
                element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/online',
                element: <OnlineEvent></OnlineEvent>,
            },
            {
                path: '/venue',
                element: <VenueEvent></VenueEvent>,
            },
            {
                path: '/onlineticket',
                element: <OnlineTicket></OnlineTicket>,
            },
            {
                path: '/venueticket',
                element: <VenueTicket></VenueTicket>
            }
        ]
    }
]);
export default routes;