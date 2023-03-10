import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";


function App() {
  const showEmployee = true;
  const [role, setRole] = useState();
  const [age, setAge] = useState(14);

  const Age = (e) => {
    setAge(e.target.value)
  }
  <Employee name = 'Rahmat'/>

  return (
    <>
      {showEmployee ? (
        <div>
          <input type="text" placeholder="Enter Role..." onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}/> <br/><br/>

          <input type="text" placeholder="Enter Age..." onChange={Age} />


          <Employee name = 'Muhammad' role={role} age={age}/>
          <Employee name = 'Rizki' role="officer" age='15'/>
          <Employee name = 'Syahputra' role="user" age='18'/>
          <Employee/>
        </div>
      ) : (
        <p>you cannot employee</p>
      )}
    </>
  );
}

export default App;
