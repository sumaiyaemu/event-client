
import { FaLongArrowAltRight } from "react-icons/fa";
const CreateEvent = () => {
    return (
        <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-24 mt-20">Create New Event</h2>
            <div className="gap-5">
                <div className="card bg-base-200  shadow-sm mb-20">
  <figure className="px-10 pt-10">
    <img 
      src="https://i.ibb.co.com/svwt31Sx/camrea.jpg"
      alt="Shoes"
      className="rounded-xl w-20 h-20 mb-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-5 text-2xl">Create an Online Event</h2>
    <div className="card-actions">
      <button className="btn btn-primary bg-[#8592eb] text-white font-semibold border-none w-96 mb-8">Create<FaLongArrowAltRight></FaLongArrowAltRight></button>
    </div>
  </div>
</div>
            </div>

             <div>
                <div className="card bg-base-200  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/q3c1mh7N/location.jpg"
      alt="Shoes"
      className="rounded-xl w-20 h-20 mb-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-5 text-2xl">Create an Venue Event</h2>
    <div className="card-actions">
      <button className="btn btn-primary bg-[#8592eb] text-white font-semibold border-none w-96 mb-8 ">Create <FaLongArrowAltRight></FaLongArrowAltRight></button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default CreateEvent;