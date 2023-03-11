import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // import id unik dengan menginstall npm install uuid

function App() {
  const [employees, setEmployees] = useState(
    [
    {
      id:1,
      name: "Jhon",
      role: "Developer",
      img: "https://images.pexels.com/photos/15790182/pexels-photo-15790182.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:2,
      name: "Annise",
      role: "Developer",
      img: "https://images.pexels.com/photos/15126611/pexels-photo-15126611.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:3,
      name: "Clara",
      role: "Developer",
      img: "https://images.pexels.com/photos/15787375/pexels-photo-15787375.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:4,
      name: "Alex",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:5,
      name: "Annie",
      role: "Developer",
      img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id:6,
      name: "Annie",
      role: "Developer",
      img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if(id == employee.id){
        return {...employee, name:newName, role:newRole}
      }  

      return employee;
    });
    setEmployees(updatedEmployees)
  }


  return (
    <>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
