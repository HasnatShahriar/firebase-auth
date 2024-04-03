import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
  
  const {registerUser,setUser} = useContext(AuthContext);
  // console.log(registerUser);
  const [error,setError] = useState('');
  const [emailError,setEmailError] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmedPassword = e.target.confirmedPassword.value;


    if(!/@gmail\.com$/.test(email)){
      setEmailError('Email must end with @gmail.com')
      return;
    }

    if(password.length < 6){
      setError("password must be 6 or more characters")
      return;
    }
    else if(password !== confirmedPassword){
      setError("Passwords didn't match")
      return;
    }
     if(!/\d{2,}$/.test(password)){
      setError('Password must end with at least 2 numbers')
      return;
     }
     if(!/[!@#$%^&*]/.test(password)){
      setError('password must have at least one special characters (!,@,#,$,%,^,&,*)')
      return;
     }
    setError('');
    setEmailError('');

    console.log(name, photo, email, password, confirmedPassword);

    registerUser(email,password)
    .then(result =>{
      setUser(result.user)
    })
    .catch(error => setError(error.message))
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
        {
          emailError && <small className="text-red-700">{emailError}</small>
        }
        <div>
          <p>password</p>
          <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div>
          <p>confirmed password</p>
          <input name="confirmedPassword" type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        {
          error && <small className="text-red-700">{error}</small>
        }
        <button type="submit" className="w-full btn btn-info my-2 text-white">Register</button>
      </form>
    </div>
  );
};

export default Register;