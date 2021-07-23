import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
    error?: string;
    id: string;
}

const Input: FC<Props> = ({
  touched,
  error,
  placeholder,
  id,
  className,
  ...rest
}) => {
  return (
    <>
      <div>
        {id && placeholder && <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>}
        <input
          id={id}
          {...rest}
          className={
            "relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border-b-2 border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" + className
          }
          placeholder={placeholder}
        />
      </div>
      {touched && <div className="text-red-500">{error}</div>}
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
