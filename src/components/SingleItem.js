import React, { useState, Fragment } from "react";
import classes from "./SingleItem.module.css";
import Popup from "./Popup";

function SingleItem(props) {
  const [showPopup, setShowPopup] = useState(false);
  const {
    id,
    aktivnost,
    aktivnosti,
    redovanRad,
    prekovremeniRad,
    datum,
    napomena,
    teren,
  } = props.item;
  const values = {
    napomena,
    aktivnost,
    aktivnosti,
    redovanRad,
    prekovremeniRad,
    datum,
    teren,
  };
  return (
    <Fragment>
      <li className={classes.item} onClick={() => setShowPopup(true)}>
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
      {showPopup && <Popup values={values} setShowPopup={setShowPopup} />}
    </Fragment>
  );
}

export default SingleItem;
