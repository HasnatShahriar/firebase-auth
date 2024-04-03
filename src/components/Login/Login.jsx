import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';


const Login = () => {

  const {loginUser,googleLogin,setUser,facebookLogin} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    loginUser(email,password)
  }

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result => setUser(result.user))
    .catch(error => console.log(error))
  }
  const handleFacebookLogin = () =>{
    facebookLogin()
    .then(result =>setUser(result.user))
    .catch(error => console.log(error))
  }

  return (
    <div className="w-[40%] mx-auto min-w-[500px] border-2 border-gray-600 p-6 rounded-3xl">
    <form onSubmit={handleLogin}>
      <div>
        <p>email</p>
        <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </div>
      <div>
        <p>password</p>
        <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full" />
      </div>
      <button type="submit" className="w-full btn btn-info my-2 text-white">Login</button>
    </form>
    <button onClick={handleGoogleLogin}>Google login</button>
    <button onClick={handleFacebookLogin}>Facebook login</button>
  </div>
  );
};

export default Login;