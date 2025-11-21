import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const OnlineEvent = () => {
   const handleOnlineEvent = event => {
      event.preventDefault();
         const form = event.target;

      const name = form.name.value;
      const catagory = form.catagory.value;
      const date = form.date.value;
      const time = form.time.value;
      const duration = form.duration.value;
      const image = form.image.value;
      //const name = form.name.value;
      const newEvent = {name, catagory, date, time, duration, image}
      console.log(newEvent);

      //send data to the server
      fetch('https://event-server-omega.vercel.app/event',{
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newEvent)
      })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Event Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
})
           }
        })
   }
  return (
  <div>
     <div className="bg-violet-100 p-3">
          <div className="breadcrumbs text-sm">
  <ul>
    <li className="font-medium"><Link to="/">Home</Link></li>
    <li className="font-medium"><Link to="/create">Create</Link></li>
    <li><a>Create Online Event</a></li>
    
  </ul>
</div>  
      </div>       
<h3 className="text-3xl font-bold items-center text-center mt-20 mb-14">Create Online Event</h3>
 <form onSubmit={handleOnlineEvent}>
   <div className="bg-neutral-100 p-3" >
    <div className="flex font-bold items-center gap-2 mt-12">
        <HiOutlineInformationCircle />
    <h2 className="text-xl">Details</h2>
    </div>
    <div className="divider"></div>
    <p className="font-medium">Give your event a name.*</p>
    <p className="mb-4 text-gray-500">See how your name appears on the event page and a list of all places where your event name will be used.<a className="link link-success">Learn more</a></p>
          <input type="text" name="name" placeholder="Enter event name here" className="input"/>
          <div className="divider"></div>
          <p className="font-medium">Choose a category for your event.*</p>
    <p className="mb-4 text-gray-500">Choosing relevant categories helps to improve the discoverability of your event.<a className="link link-success">Learn more</a></p>
          <input type="text" name="catagory" className="input" placeholder="Select Category" list="browsers" />
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
         <p className="font-medium">When is your event?*</p>
  <p className="mb-4 text-gray-500">Tell your attendees when your event starts so they can get ready to attend.</p>
  <div className="flex gap-4 ">
  
  <div>
      <p>Event Date</p>
      <input  type="date" name="date" className="input " />
  </div>
  <div>
      <p>Time</p>
      <input  type="time" name="time" className="input " />
  </div>
 <div>
  <p>Duration</p>
   <input  type="text" name="duration" className="input " placeholder="" list="duration" />
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
   <p className="font-medium">Add a few images to your event banner.</p>
  <p className="mb-4 text-gray-500">Upload colorful and vibrant images as the banner for your event! See how beautiful images help your event details page.</p>
    
    <input type="text" name="image" placeholder="add a image" className="input "/>
    <div className="divider"></div>
     <p className="font-medium">Please describe your event.</p>
  <p className="mb-4 text-gray-500">Write a few words below to describe your event and provide any extra information such as schedules, itinerary or any special instructions required to attend your event.</p>
 <textarea className="textarea" placeholder="Bio"></textarea>
  <div className=" text-center justify-center items-center mb-20">
    
          </div>
          
       </div>
      <div className="text-center mt-14">
        
         <input type="submit" value="Submit" className="btn bg-[#8592eb] bg-opacity-50 text-white w-40 mb-14  " />
         <Link to="/onlineticket">
         <button className="btn bg-[#8592eb] bg-opacity-50 text-white w-40 mb-14 ">Next</button>
         </Link>
      </div>
 </form>
  </div>
    );
};

export default OnlineEvent;