import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Home = () => {
  const abc = useContext(AuthContext);
  console.log(abc);
  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="text-2xl">This is Home Page</h2>
    </div>
  );
};

export default Home;