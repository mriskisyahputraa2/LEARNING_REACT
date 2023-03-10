import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import Img from './assets/img/gbr6.jpg'

function App() {
  const [role, setRole] = useState("dev");
  const [age, setAge] = useState(14);

  const Age = (e) => {
    setAge(e.target.value);
  };
  <Employee name="Rahmat" />;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <Employee name="Muhammad" role={role} age={age} Img={Img}/>
        <Employee name="Muhammad" role={role} age={age} Img={Img}/>
        <Employee name="Muhammad" role={role} age={age} Img={Img}/>
        <Employee name="Muhammad" role={role} age={age} Img={Img}/>
        <Employee name="Muhammad" role={role} age={age} Img={Img}/>
       
      </div>
    </>
  );
}

export default App;
