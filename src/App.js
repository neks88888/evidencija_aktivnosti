import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Login from "./pages/Login";

import List from "./pages/List";
import Missing from "./pages/Missing";
console.log("sa laptopa")
const d = new Date().now;
const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
let today = `${da}.${mo}.${ye}`;

const DUMMY_DATA = [
  {
    id: 1,
    datum: today,
    aktivnost: "Namestanje Ves Masine",
    aktivnosti: "namestanje",
    redovanRad: 15,
    prekovremeniRad: 5,
    napomena: "neka napomena1",
    teren: "",
  },
  {
    id: 2,
    datum: today,
    aktivnost: "Pravljenje Robota",
    aktivnosti: "pravljenje",
    redovanRad: 10,
    prekovremeniRad: 4,
    napomena: "neka napomena2",
    teren: "",
  },
  {
    id: 3,
    datum: today,
    aktivnost: "Sastavljanje Sporeta",
    aktivnosti: "sastavljanje",
    redovanRad: 5,
    prekovremeniRad: 3,
    napomena: "neka napomena3",
    teren: "",
  },
];

const aktivnost = [
  {
    id: 10,
    value: "",
    title: "Nista od ponudjenog",
  },
  {
    id: 11,
    value: "Namestanje Ves Masine",
    title: "Namestanje Ves Masine",
  },
  {
    id: 12,
    value: "Pravljenje Robota",
    title: "Pravljenje Robota",
  },
  {
    id: 13,
    value: "Namestanje Sporeta",
    title: "Namestanje Sporeta",
  },
];

const aktivnosti = [
  {
    id: 14,
    value: "",
    title: "Nista od ponudjenog",
  },
  {
    id: 25,
    value: "namestanje",
    title: "namestanje",
  },
  {
    id: 15,
    value: "pravljenje",
    title: "pravljenje",
  },
  {
    id: 16,
    value: "sastavljanje",
    title: "sastavljanje",
  },
  {
    id: 17,
    value: "srafljenje",
    title: "srafljenje",
  },
];

function App() {
  const [isChecked, setIsChecked] = useState(false);
  let initial_state = {
    id: Math.random(),
    // datum: today,
    aktivnost: "",
    aktivnosti: "",
    redovanRad: "",
    prekovremeniRad: "",
    napomena: "",
    teren: "",
  };
  const [globalState, setGlobalState] = useState(DUMMY_DATA);
  const [isEditing, setIsEditing] = useState(false);
  const [state, setState] = useState(initial_state);
  const [loginPodaci, setLoginPodaci] = useState({
    korisnicko: "Marko",
    lozinka: "Markovic",
  });
  const [msg, setMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [clr, setClr] = useState("yellow");

  const navigate = useNavigate();

  // let specificItem = {};

  function noviUnos() {
    setState(initial_state);
    setIsEditing(false);
    console.log("noviUnos opaljen");
    navigate("/form");
  }

  const handleIzmeni = (id) => {
    const specificItem = globalState.find((item) => item.id === id);
    // console.log(specificItem);
    setIsEditing(true);
    setState(specificItem);
    navigate("/form");
  };

  const handleObrisi = (id) => {
    setGlobalState(globalState.filter((item) => item.id !== id));
  };

  const handleNazad = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    console.log("logout");
    navigate("/");
  };

  const submitPrijava = () => {
    if (
      loginPodaci.korisnicko === "Marko" &&
      loginPodaci.lozinka === "Markovic"
    ) {
      navigate("/list");
    } else {
      setMsg("Pogresno korisnicko ime ili lozinka");
      setShowAlert(true);
      setClr("#F8C33D");
    }
    if (!loginPodaci.korisnicko && loginPodaci.lozinka) {
      setMsg("Morate uneti korisnicko ime");
      setShowAlert(true);
      setClr("#F8C33D");
      return;
    }
    if (loginPodaci.korisnicko && !loginPodaci.lozinka) {
      setMsg("Morate uneti lozinku");
      setShowAlert(true);
      setClr("#F8C33D");
      return;
    }
    if (!loginPodaci.korisnicko || !loginPodaci.lozinka) {
      setMsg("Korisnicko ime i lozinka moraju biti uneti");
      setShowAlert(true);
      setClr("#F9AC39");
      return;
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            msg={msg}
            setShowAlert={setShowAlert}
            showAlert={showAlert}
            loginPodaci={loginPodaci}
            setLoginPodaci={setLoginPodaci}
            submitPrijava={submitPrijava}
            clr={clr}
          />
        }
      />
      <Route
        path="/list"
        exact
        element={
          <List
            handleLogout={handleLogout}
            noviUnos={noviUnos}
            handleIzmeni={handleIzmeni}
            handleObrisi={handleObrisi}
            data={globalState}
          />
        }
      />
      <Route
        path="/form"
        exact
        element={
          <Form
            globalState={globalState}
            setGlobalState={setGlobalState}
            msg={msg}
            state={state}
            setState={setState}
            setShowAlert={setShowAlert}
            showAlert={showAlert}
            handleNazad={handleNazad}
            today={today}
            setMsg={setMsg}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            aktivnost={aktivnost}
            aktivnosti={aktivnosti}
            clr={clr}
            setClr={setClr}
            initial_state={initial_state}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        }
      />
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
