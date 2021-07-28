import Button from "./Button";
import "../../index.css";
import { HiLockClosed, HiLogin } from "react-icons/hi";
const icons = { HiLockClosed, HiLogin };

export default {
  title: "Button",
    component: Button,
    action: {
        handles: ["mouseover", "click"],
    },
  argTypes: {
    theme: { 
      control: { type: "select" },
    },
      Icon: {
          option: Object.keys(icons),
          mapping: icons,
      control: {
        type: "select",
        labels: {
          HiLockClosed: "closed lock",
          HiLogin: "login icon",
        },
      },
    },
  },
};

const Template = (args: any) => <Button {...args}>{args.children}</Button>;

export const Main: any = Template.bind({});
Main.args = {
  children: "Sign in",
  className: "",
  disabled: false,
  type: "submit",
};


