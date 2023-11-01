import React from "react";
import style from "./Contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
    let nameRegex = /^[A-Z][a-z A-z 0-9]{3,20}$/;
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let validationSchema = Yup.object({
        name: Yup.string()
            .matches(
                nameRegex,
                "Please enter any character from a to z or A to Z start with capital letter and containing any number from 0 to 9 with minlength 3 and maxlength 20"
            )
            .required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string()
            .matches(phoneRegex, "Invalid Phone number")
            .required("Phone number is required"),
        age: Yup.number()
            .min(18, "Your age must be 18 at least")
            .max(70, "Your age must not exceed 70 years")
            .required("Age is required"),
        password: Yup.string()
            .matches(
                passwordRegex,
                "Password must contains capital letter, small letter, numbers and special characters, minimum length 8"
            )
            .required("Password is required"),
        rePassword: Yup.string()
            .oneOf([Yup.ref("password")], "Password and rePassword are not matched")
            .required("rePassword is required"),
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            age: "",
            password: "",
            rePassword: "",
        },
        validationSchema,
        onSubmit: checker,
    });

    function checker() {
        console.log(formik.values);
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="row py-5 mt-5 g-4 justify-content-center">
                    <h2>Contact Us</h2>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            className="form-control mb-2"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.name}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className="form-control mb-2"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter Your Phone"
                            className="form-control mb-2"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.phone && formik.touched.phone ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.phone}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <input
                            type="number"
                            name="age"
                            id="age"
                            placeholder="Enter Your Age"
                            className="form-control mb-2"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.age && formik.touched.age ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.age}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Your Password"
                            className="form-control mb-2"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                    <div className="col-md-6">
                        <input
                            type="password"
                            name="rePassword"
                            id="rePassword"
                            placeholder="Enter Your rePassword"
                            className="form-control mb-2"
                            value={formik.values.rePassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.rePassword && formik.touched.rePassword ? (
                            <div className="alert alert-danger mt-2 p-2">
                                {formik.errors.rePassword}
                            </div>
                        ) : null}
                    </div>
                    <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn btn-outline-danger fit-content mt-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}
