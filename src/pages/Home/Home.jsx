import { Link } from "react-router-dom";
import ExploreEvent from "../ExploreEvent/ExploreEvent";
import CatagoriesList from "../CatagoriesList/CatagoriesList";
import { FaLongArrowAltRight } from "react-icons/fa";


const Home = () => {
    return (
        <div >
          <div className="relative">
              
           <div className="carousel w-full h-[420px]">
            
  <div id="slide1" className="carousel-item relative w-full">
    
    <img src="https://i.ibb.co.com/rRKz03JL/pexels-karolina-grabowska-5208873.jpg" className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/bMtrXYwj/event-book.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/HLJjBx8c/pexels-rafael-bertacini-3439165-5130326.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/bMtrXYwj/event-book.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className=" lg:absolute bottom-25 left-50 lg:w-[500px] lg:h-[220px] px-4  rounded-xl">
            <h3 className="text-lg lg:text-3xl font-bold text-black pt-5 pb-4">The Easiest and Most Powerful Online Booking system</h3>
            <p className="text-sm lg:text-base font-medium text-black pb-4">EventEase is an all-in-one event booking platform for event organisers,promoters and managers.</p>
             <Link to="/create">
            <button className="btn text-center items-center justify-center">Create Event<FaLongArrowAltRight></FaLongArrowAltRight></button>
            </Link>
          </div>
            </div> 
            <ExploreEvent></ExploreEvent>
             <CatagoriesList></CatagoriesList>
        </div>
    );
};

export default Home;