import { FC, memo } from "react";


interface Props {}

const Recording: FC<Props> = (props) => {
  return <div>This is Recording Page.</div>;
};

Recording.defaultProps = {};

export default memo(Recording);
