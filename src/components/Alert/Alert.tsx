import { ButtonHTMLAttributes, Children, FC, memo, useState } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "primary" | "secondary" | "custom";
    className?: string;
}

const Alert: FC<Props> = ({ children, theme, className }) => {
    const [cross, setCross] = useState(false);
    const themeClasses =
      theme === "primary"
        ? "bg-blue-100 border-blue-100 text-blue-700"
        : (theme ==="secondary"
        ? "bg-red-100 border-red-100 text-red-700"
        : " ");
    return (
    <div
        className={
         cross?" hidden ": " block " +
        "flex items-center rounded-md justify-between max-w-screen-sm px-4 py-2 mt-1 space-x-2 border-2 "
         + " " + themeClasses + " " +  (theme === "custom" ? className : "") 
      }
    >
      <p className="font-semibold">{children}</p>
      <button onClick={(event) => setCross(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
                    stroke="currentColor"
                    
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

Alert.defaultProps = {};

export default memo(Alert);
