import React, { useEffect } from "react";
import classes from "./Alert.module.css";

const Alert = ({ msg, setShowAlert, clr }) => {
  useEffect(() => {
    return setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  });

  return (
    <div
      style={{ backgroundColor: clr, color: "black" }}
      className={`sirina ${classes.alert}`}
    >
      <span className={classes.bold}>Greška: </span> {msg}
    </div>
  );
};

export default Alert;
