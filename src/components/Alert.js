import React, { useEffect } from "react";
import classes from "./Alert.module.css";

const Alert = ({ msg, setShowAlert, clr }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [msg]); // eslint-disable-line react-hooks/exhaustive-deps
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
