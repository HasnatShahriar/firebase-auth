import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
  
  const {registerUser} = useContext(AuthContext);
  // console.log(registerUser);
  

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmedPassword = e.target.confirmedPassword.value;

    console.log(name, photo, email, password, confirmedPassword);
    registerUser(email,password)
  }


  return (
    <div className="w-[40%] mx-auto min-w-[500px] border-2 border-gray-600 p-6 rounded-3xl">
      <form onSubmit={handleRegister}>
        <div>
          <p>name</p>
          <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div>
          <p>photo</p>
          <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div>
          <p>email</p>
          <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div>
          <p>password</p>
          <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div>
          <p>confirmed password</p>
          <input name="confirmedPassword" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <button type="submit" className="w-full btn btn-info my-2 text-white">Register</button>
      </form>
    </div>
  );
};

export default Register;