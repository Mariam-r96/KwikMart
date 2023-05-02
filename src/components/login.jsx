import React from "react";
import { Formik, Form, Field } from "formik";
import { Label, TextInput } from "flowbite-react";
import * as Yup from "yup";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required("username required")
    .min(2, "username too short.")
    .max(8, "First name too long (should have maximum 8 characters)."),
  password: Yup.string()
    .required("No password provided.")
    .min(4, "password is too short - should have atleast 4 characters.")
    .max(6, "password is too long - should have atmost 6 characters."),
});

const Login = () => {
  return (
    <div>
      <h1 className="text-center text-xl text-primary-800 font-semibold mb-8">
        LOGIN
      </h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          const login_params = {
            username: values.username,
            password: values.password,
          };
          axios
          .post(`https://shodai.herokuapp.com/api/login`, login_params)
          .then((response) => {
            localStorage.setItem("token" , JSON.stringify(response.data.token));
          })
          .catch((error) => {
            console.log(error);
          });
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <Form className="flex flex-col">
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="username" value="username" />
              </div>
              <TextInput
                id="username"
                name="username"
                type="text"
                sizing="md"
                value={values.username || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                color={`${
                  errors.username && touched.username ? "failure" : "gray"
                }`}
                helperText={
                  errors.username && touched.username ? (
                    <span className="font-medium">{errors.username}</span>
                  ) : null
                }
              />
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="password" value="password" />
              </div>
              <TextInput
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                sizing="md"
                value={values.password || ""}
                color={`${
                  errors.password && touched.password ? "failure" : "gray"
                }`}
                helperText={
                  errors.password && touched.password ? (
                    <span className="font-medium">{errors.password}</span>
                  ) : null
                }
              />
            </div>
            <button
              className="bg-primary-900 px-5 py-4 mt-6 text-white rounded-md"
              type="submit"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
