import { FC, memo } from "react";

interface Props {}

const Lecture: FC<Props> = (props) => {
  return <div>This is Lecture Page.</div>;
};

Lecture.defaultProps = {};

export default memo(Lecture);
