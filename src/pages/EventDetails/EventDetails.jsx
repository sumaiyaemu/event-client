import { useLoaderData, useParams } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";

  
     

const EventDetails = () => {
    const events = useLoaderData();
    const {id} = useParams()
    const event = events.find(event => event.id === id);
    console.log(event);


                   
 

    return (
                  <div className="flex gap-12">
            <div className="mt-20">
                <div className="card bg-base-100  shadow-sm">
                    <h2 className="text-4xl font-bold mb-8">{event.event_name}</h2>
  <figure>
    <img
      src={event.event_image}
      alt="Shoes" />
  </figure>
      <div className="flex justify-center gap-10 mt-8">
        <button className="btn">
 <IoShareSocialOutline />
  Share
</button>
<button className="btn">
  <MdSaveAlt />
  Save
 
</button>
      </div>


  <div className="card-body">

    <h3 className="text-[#8592eb] font-bold text-xl">DESCRIPTION</h3>
    <p>{event.large_description}</p>
  </div>   
</div>
            </div>
                    
        </div>
    );
};

export default EventDetails;