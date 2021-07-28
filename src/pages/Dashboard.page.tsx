import { FC, memo } from "react";
import { Link } from "react-router-dom";


interface Props {}

const Dashboard: FC<Props> = (props) => {
    return (
        
        <div>This is Dashboard Page.
            <Link to="/Recordings">Click here for recordings page</Link>
        </div>
      
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
