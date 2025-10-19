import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

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
    return (
        <div className="bg-base-200 mb-20 ">
             <h3 className="text-3xl mt-9 text-center"><Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/login"><button >LOGIN</button></Link> / <Link className="hover:bg-[#8592eb] p-1 rounded-md" to="/register"><button>REGISTER</button></Link></h3>
            <div>
                   <form onSubmit={handleLogin}  className="md:w-3/4 lg:w-1/2 mx-auto" >
                  <fieldset className="fieldset  ">
          <label className="label ">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
                   </form>

                   <p className="mt-2 text-center">Do not have an account? <Link className="text-violet-400 font-bold text-center" to="/register">Register</Link></p>


              
            </div>
        </div>
    );
};

export default Login;