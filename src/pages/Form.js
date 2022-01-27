import React from "react";
import { Link } from "react-router-dom";
import classes from "../cssForPages/Form.module.css";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "teren") {
      props.setIsChecked(!props.isChecked);
      // console.log({ [e.target.name]: e.target.value });
    }
    props.setState({ ...props.state, [e.target.name]: e.target.value });
  };

  console.log("unutar forme", props.state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.isEditing) {
      if (
        !props.state.aktivnost ||
        !props.state.aktivnosti ||
        !props.state.redovanRad
      ) {
        props.setMsg("Polja ne smeju biti prazna");
        props.setShowAlert(true);
        props.setClr("#F8C33D");
        console.log("prazna POLJA");
        return;
      }

      props.setGlobalState(
        props.globalState.map((item) => {
          if (item.id === props.state.id) {
            return { ...item, ...props.state };
          }
          return item;
        })
      );

      props.setState(props.initial_state);
      props.setIsEditing(false);
      console.log("izmenjeno");
      navigate("/list");
    } else {
      if (
        !props.state.aktivnost ||
        !props.state.aktivnosti ||
        !props.state.redovanRad
      ) {
        props.setMsg("Polja ne smeju biti prazna");
        props.setShowAlert(true);
        props.setClr("#F8C33D");
      } else {
        props.setGlobalState([...props.globalState, props.state]);
        props.setState(props.initial_state);
        console.log("ubaceno");
        navigate("/list");
      }
    }
  };
  console.log("najnovije");
  return (
    <form
      className="sirina"
      style={{ textAlign: "center" }}
      onSubmit={handleSubmit}
    >
      <span style={{ fontWeight: "bold" }}>
        Za{" "}
        <span style={{ color: "orange", fontWeight: "bold" }}>
          {props.today}
        </span>
      </span>
      <label className={classes.label} htmlFor="aktivnost">
        Aktivnost / Projekat:
      </label>

      <select
        className={classes.input}
        id="aktivnost"
        name="aktivnost"
        onChange={handleChange}
        value={props.state.aktivnost}
      >
        {props.aktivnost.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}{" "}
          </option>
        ))}
      </select>

      <label className={classes.label} htmlFor="aktivnosti">
        Aktivnosti :
      </label>

      <select
        className={classes.input}
        id="aktivnosti"
        name="aktivnosti"
        onChange={handleChange}
        value={props.state.aktivnosti}
      >
        {props.aktivnosti.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}{" "}
          </option>
        ))}
      </select>

      <label className={classes.label} htmlFor="redovanRad">
        Redovan Rad :
      </label>
      <input
        id="redovanRad"
        type="number"
        className={classes.input}
        min="0"
        step="any"
        placeholder="0"
        value={props.state.redovanRad}
        name="redovanRad"
        onChange={handleChange}
      />

      <label className={classes.label} htmlFor="prekovremeniRad">
        Prekovremeni Rad :
      </label>
      <input
        id="prekovremeniRad"
        type="number"
        className={classes.input}
        min="0"
        step="any"
        name="prekovremeniRad"
        placeholder="0"
        value={props.state.prekovremeniRad}
        onChange={handleChange}
      />

      <label className={classes.label} htmlFor="napomena">
        Napomena
      </label>

      <textarea
        id="napomena"
        name="napomena"
        rows="5"
        className={classes.input}
        cols="33"
        value={props.state.napomena}
        onChange={handleChange}
      ></textarea>
      <div style={{ textAlign: "left" }} className={classes.label}>
        <input
          type="checkbox"
          id="teren"
          name="teren"
          checked={props.state.teren ? true : false}
          value={true}
          onChange={handleChange}
        />{" "}
        <label htmlFor="vehicle1"> Teren</label>
      </div>

      <button className={classes.submit} type="submit">
        {props.isEditing ? "Izmeni" : "Novi Unos"}
      </button>
      <Link to={"/list"} className={classes.back}>
        Odustani
      </Link>
      {props.showAlert && (
        <Alert
          style={{ width: "90%" }}
          msg={props.msg}
          setShowAlert={props.setShowAlert}
          clr={props.clr}
          gir
        />
      )}
    </form>
  );
}

export default Form;
