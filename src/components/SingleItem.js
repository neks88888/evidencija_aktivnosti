import React, { useState, Fragment } from "react";
import classes from "./SingleItem.module.css";

function SingleItem(props) {
  const [showPopup, setShowPopup] = useState(false);
  const { id, aktivnost, aktivnosti, redovanRad, prekovremeniRad, datum } =
    props.item;

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
      {showPopup && (
        <div onClick={() => setShowPopup(false)} className="popupBackground">
          <div className="popupWrapper">
            <div>
              <div>
                <span className="bold datum">{datum}</span>
              </div>
              <div>
                <span className="bold">Projekat:</span>{" "}
                <span className="value"> {aktivnost}</span>
              </div>
              <div>
                <span className="bold">Aktivnost:</span>{" "}
                <span className="value"> {aktivnosti}</span>
              </div>
              <div>
                <span className="bold">Redovni sati:</span>{" "}
                <span className="value"> {redovanRad}</span>
              </div>
              <div>
                <span className="bold">Prekovremeni sati:</span>{" "}
                <span className="value"> {prekovremeniRad}</span>
              </div>{" "}
              <div>
                <span className="bold">Napomena:</span>
              </div>
              <button className="bold ok">OK</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default SingleItem;
