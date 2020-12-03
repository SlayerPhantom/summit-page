import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";
import "../css/Signup.css";
import Register from "../components/Register";
import { Alert, Container, Button } from "react-bootstrap";
import buildURL from "../utils/buildURL";

export default function Signup(props) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [isediting, setisediting] = useState(false);

  useEffect(() => {
    const onload = async () => {
      try {
        setIsRegistered(localStorage.getItem("isRegistered") === "true");

        setfname(localStorage.getItem("givenName"));
        setlname(localStorage.getItem("familyName"));
        setemail(localStorage.getItem("email"));
        if (localStorage.getItem("isRegistered") === "true") {
          const token = localStorage.getItem("token");
          const payload = { googleId: localStorage.getItem("googleId") };
          const headers = { Authorization: `Bearer ${token}` };
          const url = buildURL("rsvp/getrsvp");
          const res = await axios.post(url, payload, { headers });

          if (res.data.errors) {
            console.log(res.data.errors);
            return;
          }

          setfname(res.data.fname);
          setlname(res.data.lname);
          setemail(res.data.email);
        }
      } catch (error) {
        console.log(error);
      }
    };

    onload();
  }, []);

  async function register() {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const googleId = localStorage.getItem("googleId");
      const payload = {
        firstName: fname,
        lastName: lname,
        email,
        googleId,
      };

      const url = buildURL("rsvp");
      const res = await axios.post(url, payload, { headers });

      if (res.data.errors) {
        console.log(res.data.errors);
        setShowError(true);
        setShowSuccess(false);
        return;
      } else {
        setIsRegistered(true);
        localStorage.setItem("isRegistered", "true");
      }
      setIsRegistered(true);

      setShowError(false);
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
      setShowSuccess(false);
      console.log(error);
    }
  }

  async function editrsvp() {
    try {
      const payload = {
        email,
        firstName: fname,
        lastName: lname,
        googleId: localStorage.getItem("googleId"),
      };

      console.log(payload);
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const url = buildURL("rsvp/edit");
      const res = await axios.post(url, payload, { headers });

      if (res.data.errors) {
        console.log(res.data.errors);
      }

      setisediting(!isediting);

      setShowError(false);
      setShowSuccess(true);
    } catch (error) {
      console.log(error);
      setShowError(true);
      setShowSuccess(false);
    }
  }

  return (
    <div>
      <div className="background">
        <Container>
          <Container className="row top-section">
            <div className="vh-75 mb-5 top-section-2">
              <div className="textBlock">
                <h2>Sign Up</h2>
              </div>
            </div>
          </Container>
        </Container>
      </div>

      <div className="greyBackground">
        {!isRegistered && (
          <Register
            headerText={"Register Now!"}
            fname={fname}
            lname={lname}
            email={email}
            fnameOnclick={(e) => setfname(e.target.value)}
            lnameOnclick={(e) => setlname(e.target.value)}
            emailOnclick={(e) => setemail(e.target.value)}
            register={() => register()}
            registerText="Register"
            showError={showError}
            showSuccess={showSuccess}
          />
        )}

        {isRegistered && (
          <Register
            headerText={"Congrats. You are Registered!"}
            fname={fname}
            lname={lname}
            email={email}
            fnameOnclick={(e) => setfname(e.target.value)}
            lnameOnclick={(e) => setlname(e.target.value)}
            emailOnclick={(e) => setemail(e.target.value)}
            register={() => editrsvp()}
            registerText={"Edit"}
            showError={showError}
            showSuccess={showSuccess}
          />
        )}
      </div>
    </div>
  );
}
