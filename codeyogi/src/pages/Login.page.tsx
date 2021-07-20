import React, {ChangeEvent, FocusEvent, FC, memo, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Login: FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const nameOfChangedInput = event.target.name;
    setData({ ...data, [event.target.name]: event.target.value });
  }

  //useState is also a hook, it attaches the data with component ki lifecycle
  //data change hua toh lifecycle mei effect pada
  
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // const nameOfBlurredInput = event.target.name;
    setTouched({ ...touched, [event.target.name]: true });
  };

  const history = useHistory();

  useEffect(() => {
    console.log("Component data change", data);
    return () => {
      console.log("Component umounted", data);
    }
  }, [data])
  

  let emailError = "";
  let passwordError = "";
  
  // if (!data.email) {
  //   emailError = "Email address is required";
  // }
  // else if(!data.email.endsWith("@gmail.com")) {
  //   emailError = "Please enter a valid email address";
  // }
  
  // if (!data.password) {
  //   passwordError = "Password is required";
  // } else if (data.password.length < 8) {
  //   passwordError = "Password should be atleast 8 character";
  // }
  
  const formValidator = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  try {
    formValidator.validateSync(data);
  } catch (e) {
    console.log(e);
  }
  
  const myForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log("form submitting", data);
    }
  }); 
  
  return (
    <div className="w-1/2">
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="w-auto h-12 mx-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or{" "}
              <Link
                to="/auth/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={myForm.handleSubmit}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="shadow-sm hover:rounded-md">
              <div>
                {/* <label For="email-address" className="sr-only">Email address</label> */}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={myForm.handleChange}
                  onBlur={handleBlur}
                  required
                  className="relative block w-full px-3 py-2 mb-4 text-gray-900 placeholder-gray-500 border-b-2 border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {touched.email && (
                <div className="text-red-500">{emailError}</div>
              )}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border-b-2 border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              {touched.password && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
            Remember me
          </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiLockClosed></HiLockClosed>
                </span>
                Sign in
              </button>
              {submitting && <FaSpinner className="mt-5 animate-spin"></FaSpinner>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
