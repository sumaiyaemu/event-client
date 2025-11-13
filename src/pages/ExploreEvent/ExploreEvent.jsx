import { useEffect, useState } from "react";
import Event from "../Event/Event";
import { Link } from "react-router-dom";



const ExploreEvent = () => {
    const [events ,setEvents] = useState([]);
    const [dataLength , setDatalength] = useState(6);
   useEffect (() =>{
    fetch('events.json')
    .then(res => res.json())
    .then( data => setEvents(data))
   },[])
    return (
        <div>
            <div>
                <h2 className="text-3xl mt-10 mb-12 font-bold">Explore Events</h2>
                <div className="flex justify-between mt-5 mb-5 btn-link ">
                    <Link><button className="btn ">All</button></Link>
                    <Link><button className="btn ">Music</button></Link>
                   <Link><button className="btn ">Arts</button></Link>
                   <Link><button className="btn ">Sports</button></Link>
                   <Link><button className="btn ">Conference</button></Link>
                   <Link><button className="btn ">Film</button></Link>
                   <Link><button className="btn ">Workshops</button></Link>
                   <Link><button className="btn ">Coaching and Counsilling</button></Link>
                   <Link><button className="btn ">Health and Welbeing</button></Link>

                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-5 lg:gap-8">
                {
                    events.slice(0, dataLength).map(event => <Event key={event.id} event={event}></Event> )
                }
            </div>
            <div className="flex justify-center items-center text-center mt-7">
           <div className= {dataLength === events.length && 'hidden'}>
                <button onClick={ () => setDatalength(events.length) } className="btn bg-[#8592eb] bg-opacity-50 text-white mb-14  ">Show all events</button>
            </div>
           </div>
            
        </div>
    );
};

export default ExploreEvent;