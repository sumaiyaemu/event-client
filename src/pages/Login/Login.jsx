import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const {signIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);

    const handleLogin = e =>{
        e. preventDefault();
       // console.log(e. currentTarget);
        const form = new FormData(e. currentTarget);
         const email = form.get('email');
      const password = form.get('password');
      
        signIn(email,password)
        .then(result => {
          console.log(result.user)
    signIn(email,password)
        .then(result => {
          console.log(result.user)




          //navigate after login
        navigate(location?.state ? location.state : '/');

        })
        .catch(error => {
          console.error(error);
         
        })

        })
        .catch(error => {
          console.error(error);
         
        })
    }

    const handleGoogleLogin = () => {
      googleLogin()                                 
      .then(result => console.log(result.user))
    }
     const handleToast = () =>{
          toast('login successful!');
         }
    return (
        <div className="bg-base-200 mb-20 ">
             <h3 className="text-3xl mt-9 text-center"><Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/login"><button >LOGIN</button></Link> / <Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/register"><button>REGISTER</button></Link></h3>
            <div>
                   <form onSubmit={handleLogin}  className="md:w-3/4 lg:w-1/2 mx-auto" >
                  <fieldset className="fieldset  ">
          <label className="label ">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          
           <input type={showPassword ? "text" : "password"   }
           name="password"
            placeholder="password"
             className="input input-bordered flex" required />
          <div className="flex items-center gap-1 ">
          <span onClick={ () => setShowPassword(!showPassword)}>
            {
              showPassword ? <MdCheckBox></MdCheckBox> : <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
            }
            </span>
            <p>show password</p>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button onClick={handleToast} className="btn bg-violet-400/60 text-white mt-4">Login</button>
        </fieldset>
                   </form>
                   <div className="divider">Login With</div>
                   <div className="flex justify-center items-center text-center">
                    <FcGoogle className=" w-32 h-8" onClick={handleGoogleLogin}></FcGoogle>
                   </div>
                   <ToastContainer></ToastContainer>
                   <p className="mt-2 text-center">Do not have an account? <Link className="text-violet-400 font-bold text-center" to="/register">Register</Link></p>


              
            </div>
        </div>
    );
};

export default Login;