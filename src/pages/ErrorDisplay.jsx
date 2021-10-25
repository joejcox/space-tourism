import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const Error = () => (
  <div className="pl-52 h-full -mt-32 flex items-center">
    <div>
      <h1 className="text-is-3 text-white">Planet doesn't exist</h1>
      <Link
        className="bg-highlight px-4 py-2 inline-flex items-center mt-2 text-dark rounded hover:text-white hover:bg-dark"
        to="/destination">
        <IoArrowBackCircleSharp className="inline-block mr-2 text-is-6" /> Back
        to Destination Page
      </Link>
    </div>
  </div>
);

export default Error;
