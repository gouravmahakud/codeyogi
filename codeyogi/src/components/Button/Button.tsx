import { ButtonHTMLAttributes, Children, FC, memo } from "react";
import { IconType } from "react-icons";
import { HiLockClosed } from "react-icons/hi";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary"; 
  children: string;
    type?: "submit" | "reset" | "button" | undefined;
    Icon?: IconType;
}

const Button: FC<Props> = ({ children, theme, className, Icon, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
      : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
  const iconThemeClasses =
    theme === "primary"
      ? "text-indigo-500 group-hover:text-indigo-500"
      : "text-gray-600 group-hover:text-gray-400";

  return (
    <button
      {...rest}
      className={
        "relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
        themeClasses +
        " " +
        className
      }
    >
      {Icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon
          className={"w-5 h-5 " + iconThemeClasses}
          aria-hidden="true"
        />
      </span>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
};

export default memo(Button);
