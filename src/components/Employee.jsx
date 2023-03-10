
function Employee(props) {
  return (
    <>
      <h3>Employee: {props.name}</h3>
      {props.role && props.age ? (
        <div>
            <p>Role: {props.role}</p>
            <p>My age: {props.age}</p>
        </div>
      ) : (
        <p>Role: No Role</p>
      )}
    </>
  );
}
export default Employee;
