import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const VenueEvent = () => {
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
  <h3 className='text-3xl font-bold items-center text-center mt-24 mb-14'>Create Venue Event</h3>
 <div className='bg-neutral-100 p-3' >
  <div className="flex font-bold items-center gap-2 mt-12">
   <HiOutlineInformationCircle />
  <h2 className='text-xl'>Details</h2>
  </div>
  <div className="divider"></div>
  <p className='font-medium'>Give your event a name.*</p>
  <p className='mb-4 text-gray-500'>See how your name appears on the event page and a list of all places where your event name will be used.</p>
  <input type="text" placeholder="Enter event name here" className="input" />
  <div className="divider"></div>
  <p className='font-medium'>Choose a category for your event.*</p>
  <p className='mb-4 text-gray-500'>Choosing relevant categories helps to improve the discoverability of your event.</p>
    <input type="text" className="input" placeholder="Select Category" list="browsers" />
<datalist id="browsers">
  <option value="Arts"></option>
  <option value="Business"></option>
  <option value="Music"></option>
  <option value="Conference"></option>
  <option value="Sports"></option>
  <option value="Film"></option>
  <option value="Health"></option>
  <option value="Entertainment"></option>
  </datalist>
  <div className="divider"></div>
   <p className='font-medium'>When is your event?*</p>
  <p className='mb-4 text-gray-500'>Tell your attendees when your event starts so they can get ready to attend.</p>
  <div className='flex gap-4 '>
    
    <div>
  <p>Event Date</p>
 <input  type="date" className="input " />
  </div>
  <div>
  <p>Time</p>
    <input  type="time" className="input " />
  </div>
 <div>
  <p>Duration</p>
   <input  type="text" className="input " placeholder="" list="duration" />
  <datalist id="duration">
  <option value="1hr"></option>
  <option value="2hr"></option>
  <option value="3hr"></option>
  <option value="3hr 15min"></option>
  <option value="4hr"></option>
  </datalist>
   </div>
  </div>
  <div className="divider"></div>
   <p className='font-medium'>Please describe your event.</p>
  <p className='mb-4 text-gray-500'>Write a few words below to describe your event and provide any extra information such as schedules, itinerary or any special instructions required to attend your event.</p>
       <textarea className="textarea" placeholder="Bio"></textarea>
  <div className="divider"></div>
   <p className='font-medium'>Where is your event taking place? *</p>
  <p className='mb-4 text-gray-500'>Add a venue to your event to tell your attendees where to join the event.</p>
     <div> 
      <p className="font-medium mb-2">Venue</p>
    <input type="text" placeholder="Enter event name here" className="input" />                           </div>
 <div className="flex gap-5 mt-3 mb-2">
  <div>
  <p className="font-medium">Addressline1</p>
  <input type="text" placeholder="Type here" className="input" />
  </div>
  <div>
 <p className="font-medium">Addressline2</p>
  <input type="text" placeholder="Type here" className="input" />
  </div>
 </div>
  <div className="flex gap-5 mt-3 mb-2">
  <div>
  <p className="font-medium">Country</p>
  <input type="text" placeholder="Type here" className="input" />
  </div>
  <div>
  <p className="font-medium">State</p>
  <input type="text" placeholder="Type here" className="input" />
  </div>
 </div>
 
   </div>
     <div className="text-center mt-14">
         <Link to="/venueticket">
         <button className="btn bg-[#8592eb] bg-opacity-50 text-white w-40 mb-14 ">Next</button>
         </Link>
      </div>
      </div>
    );
};

export default VenueEvent;