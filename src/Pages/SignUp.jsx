import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { IoIosEye,IoIosEyeOff } from "react-icons/io";

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

const SignUp = () => {

  const { createUser, showPassword, setShowPassword } = useContext(AuthContext);

  const handleSingUp = e => {
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

    createUser(email, password)
      .then(result => {
        console.log(result);
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
      })
      .catch(error => {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "This gmail already have account"
        });
      })
  }



  return (
    <section className="h-screen md:mx-32">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://img.freepik.com/premium-vector/online-registration-sign-up-account-authentication-concept-vector-ui-illustration_106788-2918.jpg"
              className="w-full rounded-3xl"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSingUp} className="card-body">
              <h1 className="text-center text-2xl md:text-4xl font-semibold md:font-bold">Sign Up Now</h1>

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
                    type={showPassword ? "text":"password"} 
                    name="password"
                    placeholder="password"
                    className="input w-full input-bordered"
                    required />
                    <span className="relative w-0 right-7 top-4" onClick={() => setShowPassword(!showPassword)}>{
                      showPassword ?  <IoIosEyeOff />: <IoIosEye />

                    }</span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              {/* <div className="flex ">
        <p>Already have account</p>
        <Link><a className="link link-secondary">Sign In Now</a></Link>
        </div> */}
              <p>Already have account <Link to={'/signIn'}><a className="link link-error">Sign In Now</a></Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;