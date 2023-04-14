import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Textarea from "./Textarea";
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Lottie from "lottie-react";
import securityAccount from "./cloud-computing-security.json";

const FormSignIn = () => {
  const notify = () => toast.success("Successful!");
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        // console.log("FormSignin ~ actions", actions);
        console.log(values);
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            terms: false,
          });
          actions.setSubmitting(false);
        }, 5000);
        // toast.succes("It seems your password was wrong");
      }}
    >
      {(formik) => {
        {
          /* console.log(formik); */
        }
        return (
          <div className="flex border-l p-8">
            <Form className="w-1/2 pl-10" autoComplete="off">
              <Input
                label="First name"
                name="firstName"
                placeholder="Enter your first name"
                id="firstName"
              ></Input>
              <Input
                label="Last name"
                name="lastName"
                placeholder="Enter your last name"
                id="lastName"
              ></Input>
              <Input
                label="Email address"
                name="email"
                placeholder="Enter your email address"
                id="email"
                type="email"
              ></Input>
              <Textarea
                label="Introduce yourself"
                name="intro"
                placeholder="Enter your email introduce"
                id="intro"
              ></Textarea>
              <Select name="job" label="Select your job">
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </Select>
              <Checkbox name="terms">
                <p>I accept the terms and conditions</p>
              </Checkbox>
              <div className="flex justify-center mt-4">
                <button
                  // type="submit"
                  onClick={notify}
                  className="w-[50%] p-4 bg-blue-600 text-white font-semibold rounded-lg"
                  disabled={formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
            <div className="w-1/2 flex flex-col items-center content-center">
              <Lottie
                animationData={securityAccount}
                loop={true}
                autoplay={true}
              />
              <span className="text-sm text-gray-400 text-lg">
                Note: Change personal information for better account security.
              </span>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default FormSignIn;
