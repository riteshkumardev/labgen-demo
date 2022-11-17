import { Table } from "@mui/material";
import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import style from "./styles.module.css";
import Tables from "./Tables";
import Form from "./Form";
import { apiCall } from "./redux/action";
function LabgenForm() {
  const { formStatus, isEdit } = useSelector((el) => el);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((res) => res?.json())
      .then((data) => {
        const payload = { apidata: data };
        dispatch(apiCall(payload));
      });

    // apiCall(dispatch(apiData));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <LeftBar />
      {isEdit || formStatus ? <Form /> : <Tables />}
    </div>
  );
}

export default LabgenForm;
