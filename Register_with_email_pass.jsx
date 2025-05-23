import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { name, photo , email, password } = data;
    console.log(name, photo, email, password);

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert("success");
        console.log(result);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  };
  return (
    <div className="mx-auto mt-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your name"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
