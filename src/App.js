import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // import id unik dengan menginstall npm install uuid

function App() {
  const [employees, setEmployees] = useState(
    [
    {
      name: "Jhon",
      role: "Developer",
      img: "https://images.pexels.com/photos/15790182/pexels-photo-15790182.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Annise",
      role: "Developer",
      img: "https://images.pexels.com/photos/15126611/pexels-photo-15126611.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Clara",
      role: "Developer",
      img: "https://images.pexels.com/photos/15787375/pexels-photo-15787375.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Benjamin",
      role: "Developer",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Alex",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={uuidv4}
              name={employee.name}
              role={employee.role}
              img={employee.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
