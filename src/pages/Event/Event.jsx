import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Event = ({event}) => {
  const {id,event_image,event_name,short_description,cost,date,location} = event;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
   <img className="px-4 py-2  w-[550px] h-[250px] rounded-lg" src= {event_image} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{event_name}</h2>
    <p>{short_description}</p>
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <CiLocationOn></CiLocationOn>
        <p> {location}</p>
      </div>
      <div>
        <p>{cost}</p>
      </div>
      
    </div>
    <p>{date}</p>
    <div className="card-actions">
      <Link to ={`event/${id}`}>
      <button className="btn btn-primary bg-[#8592eb] border-none text-white">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Event;