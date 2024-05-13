import { useContext } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const SignIn = () => {
  const { showPassword, setUser, setShowPassword,  logIn, googleLogin, githubLogin, } = useContext(AuthContext);
 const location = useLocation()
 const navigate = useNavigate();

  const handleSingIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      Toast.fire({
        icon: "error",
        title: "Password must be 6 character"
      });
      return
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      Toast.fire({
        icon: "error",
        title: "Password must be at least 1 Uppercase and 1 Lowercase"
      });
      return
    }

    logIn(email, password)
      .then((result) => {
        console.log(result);
        // setUser(result._UserImpl.providerData[0]);
        // Navigate(location?.state ? location.state : "/");
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });

        form.email.value = '';
        form.password.value = '';
        

        navigate(location?.state ? location.state : '/')
        
      })
      .catch((error) => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "Error Please try again."
        });
      });

 
  }
 // google login
  const handleGoogleLogin= () =>{
    googleLogin()
    .then(result =>{
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      setUser(result.user.providerData[0]);
      navigate(location?.state ? location.state : "/")
    })
    .catch((error) =>{
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "Error Please try again."
      });
    })
  }
  // github
  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
      setUser(result.user.providerData[0]);
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "Error Please try again."
      });
    });
  };
  return (
    <section className="h-screen md:mb-0 mb-32 md:mx-32">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://img.freepik.com/premium-vector/online-registration-sign-up-account-authentication-concept-vector-ui-illustration_106788-2920.jpg"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

            <form onSubmit={handleSingIn} className="card-body">
              <h1 className="text-center text-2xl md:text-4xl font-semibold md:font-bold">Sign In Now</h1>
              <hr />



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Password</span>
                </label>
                <div className="flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input w-full input-bordered"
                    required />
                  <span className="relative w-0 right-7 top-4" onClick={() => setShowPassword(!showPassword)}>{
                    showPassword ? <IoIosEyeOff /> : <IoIosEye />

                  }</span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <p>Already have account <Link to={'/signUp'}><a className="link link-error">Sign Up Now</a></Link></p>
            </form>
            <div className="flex gap-4 justify-center">

              <button onClick={handleGoogleLogin} className="btn w-1/3 flex" > <FcGoogle /> Google </button>
              <button className="btn flex w-1/3" onClick={handleGithubLogin}> <FaGithub /> GitHub </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;