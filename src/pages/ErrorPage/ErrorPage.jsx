import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div>
                 <div className="hero max-w-5xl mx-auto mt-16  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co.com/5xzmpV38/404-page2.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-indigo-900 gap-5">PAGE <br /> NOT FOUND</h1>
      <p className="py-6">Oops! Something went wrong.We're sorry, but it seems like there was an error processing your request. Our team has been notified about this issue and we'll work to fix it as soon as possible.</p>
     <Link to='/'> <button className="btn bg-[#8592eb] text-white font-semibold border-none w-28 ">Home</button></Link>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ErrorPage;