function Employee(props) {
    return <>

        <h4>Employee: {props.name}</h4>
        
        {props.role ? (
            <p>{props.role}</p>
        ):(
            <p>No role</p>
    )}
        <h4>Old your: {props.old}</h4>
        {/* <h4>My Hobby: {props.hobby}</h4> */}
    </>
}
export default Employee 