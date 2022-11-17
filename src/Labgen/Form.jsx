import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "@mui/material";
import { addItem, gotoBack, update } from "./redux/action";
function Form() {
  const numeric = /^0|[1-9]\d*$/;
  const Srinngs = /^0|[A-Za-z]\d*$/;
  const dispatch = useDispatch();
  const { edit, isEdit, formStatus } = useSelector((el) => el);

  const Schema = Yup?.object().shape({
    capsule_serial: Yup?.string()
      .required("Please enter your Capsule Serial")

      .min(4)
      .max(4),

    capsule_id: Yup.string()
      .required("Please Enter Your capsule_id ")
      .typeError("Amount must be a number & String"),
    status: Yup.string()
      .required("Please Enter Your status")
      .typeError("Amount must be a String "),
    original_launch: Yup.string().required("Please Enter Original Launch"),
    original_launch_unix: Yup.number()
      //   .matches(numeric, "enter a number")
      .required("please Enter Your Original Launch  Unix"),
    // radio_buttons: Yup.string().required("Select Your Gender"),
    landings: Yup.number()
      //   .matches(numeric, "enter a number")
      .typeError("Amount must be a number")
      .required("Required Field"),

    type: Yup.string()
      .required("Please Enter type")
      .typeError("Amount must be a string"),

    details: Yup.string()
      .required("Please Enter Your blood pre...")
      .typeError("Amount must be a number"),
    reuse_count: Yup.number()
      .required("Please Enter Your Temperature")
      .typeError("Amount must be a number"),
    // agree: Yup.boolean().oneOf(
    //   [true],
    //   "You must accept the terms and conditions"
    // ),
  });
  const inputValues = {
    capsule_serial: "C1012",
    capsule_id: "dragon1",
    status: "retired",
    original_launch: "2010-12-08T15:43:00.000Z",
    original_launch_unix: 1291822980,
    missions: [
      {
        name: "COTS 1",
        flight: 7,
      },
    ],
    landings: 1,
    type: "Dragon 1.0",
    details: "Reentered after three weeks in orbit",
    reuse_count: 0,
  };
  const [inputValuess, setinputValues] = useState(inputValues);
  console.log(inputValuess, "check");
  const {
    register,
    getValues,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: isEdit ? edit : inputValues,
    mode: "onChange",

    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    dispatch(addItem(data));
    console.log(data, "data");
  };

  const handleUpdate = (updates) => {
    dispatch(update(updates));
  };
  const handleCancel = () => {
    dispatch(gotoBack());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper
        sx={{
          padding: "50px",
          marginLeft: "100px",
          height: "80%",
          marginTop: "60px",
        }}
      >
        <span style={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1, width: "35ch" },
              display: "grid",
              // gridTemplateColumns: " auto auto  auto auto   ",
            }}
          >
            <TextField
              placeholder="Please enter your Capsule Serial"
              name="capsule_serial"
              label="Capsule Serial"
              // onChange={handleChange}

              // value={inputValuess.capsule_serial}
              {...register("capsule_serial")}
            />
            <p style={{ color: "red" }}>{errors?.capsule_serial?.message} </p>

            <TextField
              // onChange={handleChange}
              placeholder="Please enter your Capsule Id "
              name="capsule_id"
              label="Capsule Id"
              {...register("capsule_id")}
            />
            <p style={{ color: "red" }}>{errors?.capsule_id?.message} </p>
            <TextField
              // onChange={handleChange}
              placeholder="Status "
              name="status"
              label="Status"
              {...register("status")}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1, width: "35ch" },
              display: "grid",
            }}
          >
            <TextField
              // onChange={handleChange}
              placeholder=" "
              name="original_launch"
              {...register("original_launch")}
              label="Original Launch"
            />
            <p style={{ color: "red" }}>{errors?.original_launch?.message} </p>
            <TextField
              // onChange={handleChange}
              placeholder="original_launch_unix "
              name="original_launch_unix"
              {...register("original_launch_unix")}
              type="number"
              label="Original Launch Unix"
            />
            <p style={{ color: "red" }}>
              {errors?.original_launch_unix?.message}{" "}
            </p>
            <TextField
              // onChange={handleChange}
              placeholder="landings "
              name="landings"
              {...register("landings")}
              type="number"
              label="Landings"
            />
            <p style={{ color: "red" }}>{errors?.landings?.message} </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1, width: "35ch" },
              display: "grid",
              // gridTemplateColumns: " auto auto  auto auto   ",
            }}
          >
            <TextField
              // onChange={handleChange}
              placeholder="Type "
              name="type"
              {...register("type")}
              label="Type"
            />
            <p style={{ color: "red" }}>{errors?.Type?.message} </p>
            <TextField
              // onChange={handleChange}
              placeholder="Details "
              name="details"
              {...register("details")}
              label="Details"
            />
            <p style={{ color: "red" }}>{errors?.details?.message} </p>
            <TextField
              // onChange={handleChange}
              placeholder="Reuse Count "
              name="reuse_count"
              {...register("reuse_count")}
              type="number"
              label="Reuse Count"
            />
            <p style={{ color: "red" }}>{errors?.reuse_count?.message} </p>
          </Box>
        </span>
        <span style={{ display: "flex" }}>
          <Button
            variant="outlined"
            sx={{ marginLeft: "80%", marginRight: "25px", marginTop: "50px" }}
            onClick={handleCancel}
          >
            CANCEL
          </Button>
          {isEdit ? (
            <Button
              variant="contained"
              sx={{ marginTop: "50px" }}
              onClick={handleUpdate}
            >
              UPDATE
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "50px" }}
            >
              SAVE
            </Button>
          )}
        </span>
      </Paper>
    </form>
  );
}

export default Form;
