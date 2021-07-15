import { FC, memo } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        This is Signup Page. Already have an account.{" "}
        <Link to="/auth/login">
          {" "}
          <span className="text-blue-500">Click Here </span>
        </Link>
      </div>
      
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
