import React from "react";
import classes from "../cssForPages/Login.module.css";
import Alert from "../components/Alert";

function Login(props) {
  const handleChange = (e) => {
    props.setLoginPodaci({
      ...props.loginPodaci,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="sirina" style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <label className={classes.label} htmlFor="kIme">
        Korisnicko ime
      </label>
      <input
        value={props.loginPodaci.korisnicko}
        name="korisnicko"
        className={classes.inputi}
        onChange={handleChange}
        type="text"
        id="kIme"
      />

      <label className={classes.label} htmlFor="lozinka">
        Lozinka
      </label>
      <input
        name="lozinka"
        value={props.loginPodaci.lozinka}
        className={classes.inputi}
        onChange={handleChange}
        type="password"
        id="lozinka"
      />

      <button className={classes.dugme} onClick={props.submitPrijava}>
        Prijava
      </button>
      {props.showAlert && (
        <Alert
          setShowAlert={props.setShowAlert}
          msg={props.msg}
          clr={props.clr}
        />
      )}
    </div>
  );
}

export default Login;
