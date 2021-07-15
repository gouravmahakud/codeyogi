import { FC, memo } from "react";
import Sidebar from "../components/Sidebar";

interface Props {}

const Dashboard: FC<Props> = (props) => {
    return (
        
        <div>This is Dashboard Page.</div>
      
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
