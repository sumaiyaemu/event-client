import { useLoaderData } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";


const AdminDashboard = () => {
    const events = useLoaderData();
    return (
        <div>
          <h1 className="font-bold">DASHBOARD: {events.length} </h1> 
          {
            events.map(event => <Dashboard
            key={event._id}
            event={event}
            
            > </Dashboard>)
          }
        </div>
    );
};

export default AdminDashboard;
