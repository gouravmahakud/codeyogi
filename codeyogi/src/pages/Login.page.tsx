import React, {
  ChangeEvent,
  FocusEvent,
  FC,
  memo,
  useState,
  useEffect,
  InputHTMLAttributes,
} from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../components/Input/Input";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button/Button";

interface Props {}

const Login: FC<Props> = (props) => {
  const {
    handleSubmit,
    getFieldProps,
    values,
    isValid,
    touched,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().required().shape({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8, ({ min }) => `Atleast ${min} characters!!!!!!!!`),
    }),
    onSubmit: (data) => {
      console.log("form submitting", data);
      setTimeout(() => {
        // setSubmitting(false);
        history.push("/dashboard");
      }, 5000);
    },
  });

  const history = useHistory();

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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="shadow-sm hover:rounded-md">
              <Input
                touched={touched.email}
                error={errors.email}
                autoComplete="current-email"
                id="email"
                required
                type="email"
                placeholder="E-mail"
                {...getFieldProps("email")}
              />
              <Input
                touched={touched.password}
                error={errors.password}
                autoComplete="current-password"
                id="password"
                required
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gray-900"
                >
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
              <Button>Sign in</Button>
              {isSubmitting && (
                <FaSpinner className="mt-5 animate-spin"></FaSpinner>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
