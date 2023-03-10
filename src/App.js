import "./App.css";
import Employee from "./components/Employee";

function App() {
  const showEmployee = true;
  const hobby = 'ngoding' 
  const role = 'magang'
  const noRole = 'not magang'

  return (
    <>
      {showEmployee ? (
        <div>
          <Employee name = 'riski' old='17' hobby={hobby} role={role} noRole={noRole}/>
        </div>
      ) : (
        <p>you cannot employee</p>
      )}
    </>
  );
}

export default App;
