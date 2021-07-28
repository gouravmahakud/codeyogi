import Alert from "./Alert";
import "../../index.css";

export default {
  title: "Alert",
  component: Alert,
};

const Template = (args: any) => <Alert {...args}>{args.children}</Alert>;

export const Main: any = Template.bind({});
Main.args = {
  children:
    "Primary! Lorem Ipsum is simply dummy text of the printing.",
  className: "",
};





