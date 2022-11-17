import { Table } from "@mui/material";
import React from "react";
import LeftBar from "./LeftBar";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import style from "./styles.module.css";
import Tables from "./Tables";
import Form from "./Form";
function LabgenForm() {
  const { formStatus, isEdit } = useSelector((el) => el);
  return (
    <div style={{ display: "flex" }}>
      <LeftBar />
      {isEdit || formStatus ? <Form /> : <Tables />}
    </div>
  );
}

export default LabgenForm;
