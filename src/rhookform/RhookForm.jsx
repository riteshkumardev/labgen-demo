import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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
import { RhookFormSchema, SignupSchema } from "../schema/Schema";

function RhookForm() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const numeric = /^0|[1-9]\d*$/;
  const Srinngs = /^0|[A-Za-z]\d*$/;
  const RhookFormSchema = Yup?.object().shape({
    Patient_name: Yup?.string()
      .required("please Enter Your Name")
      .matches(Srinngs, "enter a Srinngs")
      .min(4)
      .max(25),

    dob: Yup.date()
      .required("please Enter Your Name")
      .typeError("Amount must be a number"),
    Appointment_date: Yup.date()
      .required("please Enter Your Appointment Date")
      .typeError("Amount must be a Data "),
    Doctors: Yup.string().required("please Select Doctors"),
    Consultation_Charge: Yup.string()
      .matches(numeric, "enter a number")
      .required("please Enter Your Consultation_Charge"),
    // radio_buttons: Yup.string().required("Select Your Gender"),
    height: Yup.number()
      .typeError("Amount must be a number")
      .required("Required Field"),

    weight: Yup.number()
      .required("please Enter Your weight")
      .typeError("Amount must be a number"),

    blood_pre: Yup.number()
      .required("please Enter Your blood pre...")
      .typeError("Amount must be a number"),
    Temperature: Yup.number()
      .required("please Enter Your Temperature")
      .typeError("Amount must be a number"),
    agree: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = (data) => {
    const now = new Date();

    if (data.agree !== true) {
      alert("Please check the box");
    } else if (data.dob > now) {
      alert("Please Enter valid Your Date Of Birth ");
    } else if (data.Appointment_date < now) {
      alert("Please Enter valid Appointment Date");
    } else {
      alert("Register successfully ");
    }

    return console.log(data);
  };
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
    register,

    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: int,
    mode: "onChange",
    reValidateMode: "onSubmit",

    resolver: yupResolver(RhookFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              name="Patient_name"
              sx={{ width: "90%" }}
              {...register("Patient_name", { value: /^[A-Z]+$/ })}
            />
            <p style={{ color: "red" }}>{errors?.Patient_name?.message} </p>
          </Grid>
          <Grid item xs={12}>
            <p style={{ marginBottom: "0px" }}> Date of Birth</p>
            <TextField
              // label="Patient Name"
              type="date"
              name="dob"
              sx={{ width: "90%" }}
              {...register("dob")}
            />

            <p style={{ color: "red" }}>{errors?.dob?.message} </p>
          </Grid>
          <Grid item xs={12}>
            <p>Gender</p>

            <div>
              <label>
                <input
                  style={{ height: "20px", width: "20px" }}
                  type="radio"
                  value="male"
                  name="radio_buttons"
                  {...register("radio_buttons")}
                />
                Male
              </label>
              <label>
                <input
                  style={{ height: "20px", width: "20px" }}
                  type="radio"
                  value="female"
                  name="radio_buttons"
                  {...register("radio_buttons")}
                />
                Female
              </label>
              <label>
                <input
                  style={{ height: "20px", width: "20px" }}
                  value="Other"
                  type="radio"
                  name="radio_buttons"
                  {...register("radio_buttons")}
                />
                Other
              </label>
              <p style={{ color: "red" }}>{errors?.radio_buttons?.message} </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <p style={{ marginBottom: "0px" }}>Appointment Date</p>
            <TextField
              type="date"
              name="Appointment_date"
              sx={{ width: "90%" }}
              {...register("Appointment_date")}
            />
            <p style={{ color: "red" }}>{errors?.Appointment_date?.message} </p>
          </Grid>

          <Select
            name="Doctors"
            label="Doctors"
            sx={{
              width: "80%",
              marginLeft: "60px",
              marginTop: "40px",
            }}
            {...register("Doctors")}
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

          <p style={{ margin: "auto", color: "red" }}>
            {errors?.Doctors?.message}{" "}
          </p>
          <Grid item xs={12}>
            <TextField
              label="Consultation Charhges"
              type="text"
              name="Consultation_Charge"
              {...register("Consultation_Charge")}
              sx={{ width: "90%" }}
            />
            <p style={{ color: "red" }}>
              {errors?.Consultation_Charge?.message}
            </p>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Height "
              name="height"
              type="number"
              {...register("height")}
              sx={{ width: "90%", marginLeft: "10px" }}
            />
            <p style={{ color: "red" }}>{errors?.height?.message} </p>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Blood Pre..."
              name="blood_pre"
              type="number"
              {...register("blood_pre")}
              sx={{ width: "90%" }}
            />
            <p style={{ color: "red" }}>{errors?.blood_pre?.message} </p>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Weight"
              type="number"
              name="weight"
              {...register("weight")}
              sx={{ width: "90%" }}
            />
            <p style={{ color: "red" }}>{errors?.weight?.message} </p>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Temperature"
              name="Temperature"
              {...register("Temperature")}
              sx={{ width: "90%", marginRight: "20px" }}
            />
            <p style={{ color: "red" }}>{errors?.Temperature?.message} </p>
          </Grid>
        </Grid>
        <div style={{ marginTop: "30px" }}>
          <label>
            <Checkbox
              name="agree"
              {...register("agree")}
              sx={{ width: "5px" }}
              {...label}
            />
            I have read and agree to the Terms *
          </label>
          <p style={{ color: "red" }}>{errors?.agree?.message} </p>
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
        <Button type="submit" variant="contained" sx={{ margin: "20px" }}>
          Register
        </Button>
      </Paper>
    </form>
  );
}

export default RhookForm;
