import React from "react";

import * as Yup from "yup";
export const SignupSchema = Yup.object({
  Patient_name: Yup.string().min(4).max(25).required("please Enter Your Name"),
  dob: Yup.date().required("please Enter Your Name"),
  Appointment_date: Yup.date().required("please Enter Your Appointment Date"),
  Doctors: Yup.string().required("please Select Doctors"),
  Consultation_Charge: Yup.number().required(
    "please Enter Your Consultation_Charge"
  ),
  height: Yup.number().required("please Enter Your height"),
  weight: Yup.number().required("please Enter Your weight"),
  blood_pre: Yup.number().required("please Enter Your blood pre..."),
  Temperature: Yup.number().required("please Enter Your Temperature"),
  agree: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});
