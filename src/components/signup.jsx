import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Label, TextInput } from "flowbite-react";
import * as Yup from "yup";
import Link from "next/link";
import { coreAxios } from "../utils/axios";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name required")
    .min(2, "First name too short.")
    .max(50, "First name too long (should have maximum 50 characters)."),
  lastName: Yup.string()
    .required("Last name required")
    .min(2, "Last name too short.")
    .max(50, "Last name too long (should have maximum 50 characters)."),
  username: Yup.string()
    .required("Username required")
    .min(2, "Username too short.")
    .max(8, "First name too long (should have maximum 8 characters)."),
  password: Yup.string()
    .required("No password provided.")
    .min(4, "Password is too short - should have atleast 4 characters.")
    .max(6, "Password is too long - should have atmost 6 characters."),
  email: Yup.string().email("Invalid email").required("Email required"),
});

const SignUp = () => {
  const [errorMessage , setErrorMessage] = useState(undefined);

    const getUserDetails = () => {
      coreAxios.get("/api/user")
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const loginUser = (user) => {
        coreAxios
        .post(`/api/login`, user)
        .then((response) => {
          localStorage.setItem("token" , response.data.token);
          router.push(`/`);
          getUserDetails();
        })
        .catch((error) => {
          console.log(error);
        });
    }

  return (
    <div>
      <h1 className="text-center text-xl text-primary-800 font-semibold mb-8">
        REGISTER
      </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const register_params = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
          };

           axios
            .coreAxios(`/api/register`, register_params)
             .then((response) => {
               console.log(response.data);
               const loginParams = {
                 username : register_params.username,
                 password : register_params.password
               }
               loginUser(loginParams);
             })
             .catch((error) => {
               console.log(error.response.data);
               setErrorMessage(error.response.data.message)
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
            <div className="flex gap-6">
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First Name" />
                </div>
                <TextInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName || ""}
                  color={`${
                    errors.firstName && touched.firstName ? "failure" : "gray"
                  }`}
                  sizing="md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.firstName && touched.firstName ? (
                      <span className="font-medium">{errors.firstName}</span>
                    ) : null
                  }
                />
              </div>
              <div className="w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last Name" />
                </div>
                <TextInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  sizing="md"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName || ""}
                  color={`${
                    errors.lastName && touched.lastName ? "failure" : "gray"
                  }`}
                  helperText={
                    errors.lastName && touched.lastName ? (
                      <span className="font-medium">{errors.lastName}</span>
                    ) : null
                  }
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
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
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                name="email"
                type="email"
                sizing="md"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                color={`${errors.email && touched.email ? "failure" : "gray"}`}
                helperText={
                  errors.email && touched.email ? (
                    <span className="font-medium">{errors.email}</span>
                  ) : null
                }
              />
            </div>
            <div className="mt-4">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
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
              Register
            </button>
            <span className="text-red-600 mt-5 bg-red-100 border border-red-600 rounded-md p-3">{errorMessage || ''}</span>
            <Link className="text-center text-ternary-500 font-medium mt-6" href={'/my-account/login'}>Already have an account? Login here</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
