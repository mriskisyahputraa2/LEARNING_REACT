import EditEmployee from "./EditEmployee";

function Employee(props) {
  return (
    <>
      <div className="py-8 px-8 max-w-sm m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover h-[100px] w-[100px] block mx-auto bg-center rounded-full sm:mx-0 sm:shrink-0"
          src={props.img}
          alt="Man's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">Role: {props.role}</p>
          </div>

          <EditEmployee/>

        </div>
      </div>
    </>
  );
}
export default Employee;
