import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdCheckBoxOutlineBlank ,MdCheckBox } from "react-icons/md";

const Register = () => {
            const { createUser, setUser } = useContext(AuthContext);
            const [showPassword , setShowPassword] = useState(false);
               const handleRegister = e =>{
        e. preventDefault();
        console.log(e. currentTarget);
        const form = new FormData(e. currentTarget);
        const name = form .get('name');
         const number = form .get('number');
         const email = form .get('email');
         const password =form .get('password');

        //create User
         createUser(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
    }

    return (
        <div>
            <div className="bg-base-200 mb-20 ">
             <h3 className="text-3xl mt-9 text-center"><Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/login"><button >LOGIN</button></Link> / <Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/register"><button>REGISTER</button></Link></h3>
            <div>
                   <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto" >
                  <fieldset className="fieldset  ">
          <label className="label ">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" />
          <label className="label ">Number</label>
          <input type="number" name="number" className="input" placeholder="Phone Number" />
          <label className="label ">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type={showPassword ? "text" : "password"}
           name="password" 
           placeholder="password" 
           className="input input-bordered" required />
            <div className="flex items-center gap-1 ">
          <span onClick={ () => setShowPassword(!showPassword)}>
            {
              showPassword ? <MdCheckBox></MdCheckBox> : <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
            }
            </span>
            <p>show password</p>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-violet-500/60 text-white mt-4">Register</button>
        </fieldset>
                   </form>

                   <p className="mt-2 text-center">Already have an account? <Link className="text-violet-400 font-bold text-center" to="/login">Login</Link></p>


              
            </div>
        </div>
        </div>
    );
};

export default Register;