import { FC, memo } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        This is login Page. Don't have an account.{" "}
        <Link to="/auth/signup">
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

Login.defaultProps = {};

export default memo(Login);
