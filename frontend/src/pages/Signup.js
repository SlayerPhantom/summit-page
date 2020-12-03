import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import "../css/style.css";
import "../css/Signup.css";
import Register from "../components/Register";
import RegisterEdit from "../components/RegisterEdit";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "react-bootstrap";
import buildURL from "../utils/buildURL";

export default function Signup(props) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [isediting, setisediting] = useState(false);

  useEffect(() => {
    const onload = async () => {
      try {
        setIsRegistered(localStorage.getItem("isRegistered") === "false");

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

      console.log(token);
      console.log(payload);

      const url = buildURL("rsvp");
      const res = await axios.post(url, payload, { headers });

      if (res.data.errors) {
        console.log(res.data.errors);
      } else {
        setIsRegistered(true);
        localStorage.setItem("isRegistered", "true");
      }
    } catch (error) {
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
    } catch (error) {
      console.log(error);
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
            fname={fname}
            lname={lname}
            email={email}
            fnameOnclick={(e) => setfname(e.target.value)}
            lnameOnclick={(e) => setlname(e.target.value)}
            emailOnclick={(e) => setemail(e.target.value)}
            register={() => register()}
          />
        )}

        {isRegistered && (
          <RegisterEdit
            fname={fname}
            lname={lname}
            email={email}
            fnameOnclick={(e) => setfname(e.target.value)}
            lnameOnclick={(e) => setlname(e.target.value)}
            emailOnclick={(e) => setemail(e.target.value)}
            register={() => editrsvp()}
          />
        )}
      </div>
    </div>
  );
}
