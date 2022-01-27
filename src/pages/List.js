import React, { Fragment } from "react";
import SingleItem from "../components/SingleItem";

function List(props) {
  return (
    <Fragment>
      <div className="sirina pos">
        <div className="logout" onClick={props.handleLogout}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <ul style={{ padding: "0" }}>
          {props.data.map((item) => (
            <SingleItem
              data-toggle="modal"
              data-target="#exampleModal"
              key={item.id}
              handleIzmeni={props.handleIzmeni}
              handleObrisi={props.handleObrisi}
              item={item}
            />
          ))}
        </ul>

        <div className="makeNew" onClick={props.noviUnos}>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </Fragment>
  );
}

export default List;
