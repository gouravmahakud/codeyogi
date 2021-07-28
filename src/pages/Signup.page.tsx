import { FC, memo } from "react";
import { Link } from "react-router-dom";


interface Props {}

const Signup: FC<Props> = (props) => {
    return (
      <div className="flex flex-row justify-between">
        <div>
          This is SignUp Page. Don't have an account.{" "}
          <Link to="/auth/login">
            <span className="text-blue-500">Click Here</span>{" "}
          </Link>
          <Link to="/dashboard">
            {" "}
            {"    "}
            <span className="text-blue-500">
              Click Here to go to Dashboard
            </span>{" "}
          </Link>
        </div>
      </div>
    );
};



export default memo(Signup);
