import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const VenueTicket = () => {
    return (
       <div>
        <div className="bg-violet-100 p-3">
          <div className="breadcrumbs text-sm">
  <ul>
    <li className="font-medium"><Link to="/">Home</Link></li>
    <li className="font-medium"><Link to="/create">Create</Link></li>
    <li><a>Create Venue Event</a></li>
    
  </ul>
</div>  
      </div>
    <h3 className="text-3xl font-bold items-center text-center mt-20 mb-14">Create Venue Event</h3>
    <div className="bg-neutral-100 p-3" >
    <div className="flex font-bold items-center align-middle gap-2 mt-12">
        <FaTicketAlt />
    <h2 className="text-xl">Tickets</h2>
    <div className="divider"></div>
                    </div>
                    <p className="font-medium">Let's create tickets!</p>
    <p className="mb-4 text-gray-500">Add the ticket price and the number of your attendees. For free events, keep the price at $0.<a className="link link-success">Learn more</a></p>
    <div className="divider"></div>
     <div className="flex gap-4 ">
  
 <div>
  <p>Price*</p>
   <input  type="text" className="input " placeholder="" list="duration" />
<datalist id="duration">
  <option value="BD"></option>
  
</datalist>
   </div>
    <div>
      <p>Total number of tickets available*</p>
      <input  type="number" className="input " />
  </div>
  </div>
  <div className="flex gap-3 mt-8">
    <input type="checkbox" defaultChecked className="toggle toggle-primary" />
    <p>I want to offer early bird discount.</p>
  </div>
  <p className="mb-4 text-gray-500">Enabling this discount lets your attendees get all the regular tickets features at a discounted price.<a className="link link-success">Learn more</a></p>
            </div>
            <div className=" flex justify-center gap-2 text-center mt-14">
                 <Link to="/online">
         <button className="btn bg-[#8592eb] bg-opacity-50 text-white w-40 mb-14 ">Previous</button>
         </Link>
         <Link >
         <button className="btn bg-[#8592eb] bg-opacity-50 text-white w-40 mb-14 ">Next</button>
         </Link>
      </div>
        </div>
    );
};

export default VenueTicket;