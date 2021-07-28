import Input from "./Input";
import "../../index.css";

export default {
  title: "Input",
  component: Input,
};

const Template = (args: any) => <Input {...args}>{args.children}</Input>;

export const Main: any = Template.bind({});
Main.args = {
};








