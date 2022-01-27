import React from "react";

function Popup(props) {
  const {
    aktivnost,
    aktivnosti,
    redovanRad,
    prekovremeniRad,
    datum,
    napomena,
    teren,
  } = props.values;
  return (
    <div onClick={() => props.setShowPopup(false)} className="popupBackground">
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
            <br />
            <span className="value"> {napomena}</span>
          </div>
          <div>
            <span className="bold">Teren:</span>{" "}
            <span className="value">
              {" "}
              {teren !== "" || teren !== false ? "Da" : "Ne"}
            </span>
          </div>{" "}
          <button className="bold ok">OK</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
