import React from "react";
import classes from "./SingleItem.module.css";

function SingleItem(props) {
  const { id, aktivnost, redovanRad, prekovremeniRad } = props.item;

  return (
    <li className={classes.item}>
      {/* {datum && <span className={classes.bold}>{datum}</span>} */}
      {/* <br /> */}
      <span>{aktivnost}</span>
      <br />
      {/* <span>{aktivnosti}</span> <br /> */}
      <span>
        <span className={classes.bold}>R : </span>
        {redovanRad}
      </span>{" "}
      <span>
        <span className={classes.bold}>P : </span>
        {prekovremeniRad}
      </span>{" "}
      <i
        className={`fa fa-pencil ${classes.rightMargin}`}
        onClick={() => props.handleIzmeni(id)}
      />
      {"     "}
      <i
        className={`fas fa-trash ${classes.rightMargin}`}
        onClick={() => props.handleObrisi(id)}
      />
      <br />
    </li>
  );
}

export default SingleItem;
