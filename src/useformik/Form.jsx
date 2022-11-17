import React from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  Paper,
  Radio,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import Checkbox from "@mui/material/Checkbox";
import { SignupSchema } from "../schema/Schema";

function Form() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const int = {
    Patient_name: "",
    dob: undefined,
    Appointment_date: "11/15/2022",
    Doctors: "",
    Consultation_Charge: "",
    height: "",
    weight: "",
    blood_pre: "",
    Temperature: "",
    radio_buttons: "",
    agree: false,
  };

  const {
    values,
    handleReset,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: int,
    validationSchema: SignupSchema,
    onSubmit: (value, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(errors);
  return (
    <Paper
      elevation={4}
      sx={{ margin: "auto", textAlign: "center", width: "450px" }}
    >
      <p style={{ fontSize: "25px", marginBottom: "0px" }}>
        Patient consultation Form
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Patient Name"
            onChange={handleChange}
            value={values.Patient_name}
            name="Patient_name"
            sx={{ width: "90%" }}
          />
          {errors.Patient_name && touched.Patient_name ? (
            <p style={{ color: "red" }}>{errors?.Patient_name} </p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <p style={{ marginBottom: "0px" }}> Date of Birth</p>
          <TextField
            // label="Patient Name"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dob}
            name="dob"
            sx={{ width: "90%" }}
          />
          {errors.dob && touched.dob ? (
            <p style={{ color: "red" }}>{errors?.dob} </p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <p>Gender</p>

          <div>
            <label>
              <Radio
                checked={values.radio_buttons === "male"}
                onChange={handleChange}
                value="male"
                name="radio_buttons"
              />
              Male
            </label>
            <label>
              <Radio
                checked={values.radio_buttons === "female"}
                onChange={handleChange}
                value="female"
                name="radio_buttons"
              />
              Female
            </label>
            <label>
              <Radio
                checked={values.radio_buttons === "Other"}
                onChange={handleChange}
                value="Other"
                name="radio_buttons"
              />
              Other
            </label>
            {errors.radio_buttons && touched.radio_buttons ? (
              <p style={{ color: "red" }}>{errors?.radio_buttons} </p>
            ) : null}
          </div>
        </Grid>
        <Grid item xs={12}>
          <p style={{ marginBottom: "0px" }}>Appointment Date</p>
          <TextField
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Appointment_date}
            name="Appointment_date"
            sx={{ width: "90%" }}
          />
          {errors.Appointment_date && touched.Appointment_date ? (
            <p style={{ color: "red" }}>{errors?.Appointment_date} </p>
          ) : null}
        </Grid>

        <Select
          label="Doctors"
          name="Doctors"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Doctors}
          sx={{ width: "80%", marginLeft: "60px", marginTop: "40px" }}
        >
          <MenuItem value={"Aikenhead"}>Dr.Aikenhead</MenuItem>
          <MenuItem value={"Abhiram"}>Dr.Abhiram</MenuItem>
          <MenuItem value={"Manu"}>Dr.Manu</MenuItem>
          <MenuItem value={"Harish"}>Dr.Harish</MenuItem>
          <MenuItem value={"Devi"}>Dr.Devi</MenuItem>
          <MenuItem value={"Suman"}>Dr.Suman</MenuItem>
          <MenuItem value={"Ravi"}>Dr.Ravi</MenuItem>
          <MenuItem value={"Aman"}>Dr.Aman</MenuItem>
          <MenuItem value={"Raju"}>Dr.Raju</MenuItem>
        </Select>

        {errors.Doctors && touched.Doctors ? (
          <p style={{ margin: "auto", color: "red" }}>{errors?.Doctors} </p>
        ) : null}
        <Grid item xs={12}>
          <TextField
            label="Consultation Charhges"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Consultation_Charge}
            name="Consultation_Charge"
            sx={{ width: "90%" }}
          />
          {errors.Consultation_Charge && touched.Consultation_Charge ? (
            <p style={{ color: "red" }}>{errors?.Consultation_Charge} </p>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Height "
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.height}
            name="height"
            sx={{ width: "90%", marginLeft: "10px" }}
          />
          {errors.height && touched.height ? (
            <p style={{ color: "red" }}>{errors?.height} </p>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Blood Pre..."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.blood_pre}
            name="blood_pre"
            sx={{ width: "90%" }}
          />
          {errors.blood_pre && touched.blood_pre ? (
            <p style={{ color: "red" }}>{errors?.blood_pre} </p>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
            name="weight"
            sx={{ width: "90%" }}
          />
          {errors.weight && touched.weight ? (
            <p style={{ color: "red" }}>{errors?.weight} </p>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Temperature"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Temperature}
            name="Temperature"
            sx={{ width: "90%", marginRight: "20px" }}
          />
          {errors.Temperature && touched.Temperature ? (
            <p style={{ color: "red" }}>{errors?.Temperature} </p>
          ) : null}
        </Grid>
      </Grid>
      <div style={{ marginTop: "30px" }}>
        <label>
          <Checkbox
            name="agree"
            onChange={handleChange}
            sx={{ width: "5px" }}
            {...label}
          />{" "}
          I have read and agree to the Terms *
        </label>
        {errors.agree && touched.agree ? (
          <p style={{ color: "red" }}>{errors?.agree} </p>
        ) : null}
      </div>
      <div style={{ textAlign: "left", margin: "20px" }}>
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          color="success"
        />
        <span style={{ fontSize: "14px", marginBottom: "0px" }}>
          * Patient Name (Textbox): Name should be alphabets.
        </span>
        <br />
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          value={true}
          color="success"
        />
        <span style={{ fontSize: "14px", marginBottom: "0px" }}>
          * Date of Birth (Date selection): Select patient date of birth.
        </span>
        <br />
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          value={true}
          color="success"
        />
        <span style={{ fontSize: "14px", marginBottom: "0px" }}>
          * Appointment Date (Date selection): should select date for patient
          current & future appointment.
        </span>
        <br />
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          value={true}
          color="success"
        />
        <span style={{ fontSize: "14px", marginBottom: "0px" }}>
          * Doctor Name (Dropdown): Select doctor in dropdown.
        </span>{" "}
        <br />
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          value={true}
          color="success"
        />
        <span style={{ fontSize: "14px", marginBottom: "0px" }}>
          * Consultation Charges (Text Box with currency): Enter amount for
          consultation charges.
        </span>
        <br />
        <Checkbox
          sx={{ width: "5px" }}
          {...label}
          defaultChecked
          value={true}
          color="success"
        />
        <span style={{ size: "small", marginLeft: "0px" }}>
          Textbox with Numeric or Decimal Value and not a mandatory fields,
          Height, BP, Weight, Temperature.
        </span>
        <br />
      </div>
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{ margin: "20px" }}
      >
        Register
      </Button>
    </Paper>
  );
}

export default Form;
