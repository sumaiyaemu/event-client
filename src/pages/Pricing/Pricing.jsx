import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Pricing = () => {
    return (
        <div> 
            <div className="mt-28 w-full h-60 bg-linear-to-bl from-violet-200 to-violet-100 p-5 pl-5 pr-7">
                  <h1 className="font-bold text-3xl">EventEase Pricing</h1>
                  <p className="mt-4 mb-6 text-xl">We believe your event experience should be simple, elegant and hassle-free. Our aim is to create that experience so that you can focus on hosting your event while we take care of the rest!</p>
                  <Link to="/create">
            <button className="btn text-center items-center justify-center">Create Event<FaLongArrowAltRight></FaLongArrowAltRight></button>
            </Link>
            </div>

            <div>
                <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-2xl font-bold">EventEase is Completely Free to Use for Free Events! We Only Charge You When You Sell Tickets for Your Events</h1>
      <p className="py-6">
        Don't want to pay this service fee? Simply select the option and we will pass on the service fee down to your attendees when they purchase your tickets.
      </p>
      
    </div>
  </div>
</div>
            </div>

            <div>
                 <h1 className=" text-3xl font-bold text-center mt-14 mb-6">Frequently Asked Questions</h1>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">Is EventEase really free?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">Does EventEase charge for free event?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do I receive payment from my attendee?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
            </div>
        </div>
    );
};

export default Pricing;