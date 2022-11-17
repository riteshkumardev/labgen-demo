import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "./redux/action";
import style from "./styles.module.css";
function LeftBar() {
  const { data } = useSelector((el) => el);
  const dispatch = useDispatch();
  // const [ApiFilterData, setApiFilterData] = useState([]);
  const init = {
    capsule_serial: "",
    capsule_id: "",
  };
  const [inputData, steInputData] = useState(init);

  console.log(inputData);

  const handleFilter = () => {
    if (inputData?.capsule_serial !== "") {
      const filterdata = data.filter((el) =>
        el.status
          .toLowerCase()
          .includes(inputData?.capsule_serial?.toLowerCase())
      );
      dispatch(filterData(filterdata));
    } else if (inputData?.capsule_serial !== "") {
      const filterdata = data.filter((el) =>
        el.status.toLowerCase().includes(inputData?.capsule_id?.toLowerCase())
      );
      dispatch(filterData(filterdata));
    }
  };

  const handelchange = (e) => {
    const { name, value } = e.target;
    if (name === "capsule_id") {
      steInputData({ capsule_id: value });
    } else if (name === "capsule_serial") {
      steInputData({ capsule_serial: value });
    }
  };

  return (
    <Paper
      sx={{
        width: "20%",
        backgroundColor: "#E1E4E8",
        height: "900px",
      }}
    >
      <div className={style.systumText}>
        System Dictionary &gt; Canned Comments
      </div>

      <TextField
        sx={{
          marginLeft: "28px",
          width: "85%",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="capsule_id"
        onChange={handelchange}
        label="Capsule Id "
      />
      <TextField
        sx={{
          marginLeft: "28px",
          width: "85%",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="capsule_serial"
        onChange={handelchange}
        label="Capsule Serial"
      />
      <Button
        variant="outlined"
        sx={{ marginLeft: "40%", marginRight: "25px", marginTop: "50px" }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={handleFilter}
        sx={{ marginTop: "50px" }}
      >
        Search
      </Button>
    </Paper>
  );
}

export default LeftBar;
