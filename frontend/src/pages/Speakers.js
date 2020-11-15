import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container } from "react-bootstrap";
import "../style.css";
import SpeakerCard from "../components/SpeakerCard";
import Lottie from "react-lottie";
import consultData from "../images/consolutation.json";
import Background from "../images/bg.png";

const BillGates = {
  photo: "https://i.imgur.com/Kkcfhm7.jpg",
  name: "Bill Gates",
  text:
    "Deja vu. I've just been in this place before. Higher on the street. And I know it's my time to go. Calling you and the search is mystery Standing on my feet. It's so hard when I try to be me uoooh!",
};

const ElonMusk = {
  photo: "https://i.imgur.com/bd2EhI2.jpg",
  name: "Elon Musk",
  text:
    "Runnin' in the nineties. Is a new way I like to be. I'm just running in the nineties. Come on, baby, run to me. We are running in the nineties. Is a new way to set me free. I'm just running in the nineties. Yes, I wanna know, yes, I wanna see",
};

const MarkZuckerberg = {
  photo: "https://i.imgur.com/WHSGElT.jpg",
  name: "Mark Zuckerberg",
  text:
    "One more turn and I'll settle the score. A rubber fire screams in to the night. Crash and burn is what you're gonna do, I am the master of the asphalt fight. They all said I'd best give it up. What a fool, to believe their lies! Now they've fallen, I'm at the top. Are you ready now to die?",
};

export default function Speakers() {
  const speakerData = {
    loop: true,
    autoplay: true,
    animationData: consultData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <div style={style}>
        <Container>
          <Container
            className="row top-section justify-content-center align-middle"
            style={{
              height: "60vh",
              lineHeight: "60vh",
              textAlign: "center",
              color: "white",
              fontSize: "5rem",
              fontWeight: "bold",
            }}
          >
            Speakers
          </Container>
        </Container>
      </div>

      <Container className="py-5 d-flex justify-content-center align-items-center flex-column">
        <Container className="row top-section">
          <div className="row vh-75 mb-5 top-section-2">
            <div className="order-md-1 order-2 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <Lottie options={speakerData} height={400} width={400} />
            </div>
            <div className="main-content col-md-6 col-12 order-md-2 order-1 d-flex justify-content-center">
              <h4
                className="text-center black"
                style={{ fontFamily: "circular" }}
              >
                Another night, another dream but always you It's like a vision
                of love that seems to be true Another night another dream but
                always you In the night I dream of love so true Just another
                night, another vision of love You feel joy, you feel pain, 'cuz
                nothing will be the same Just another night is all that it takes
                To understand the difference between lovers and fakes
              </h4>
            </div>
          </div>
        </Container>
      </Container>

      <div
        style={{ backgroundColor: "rgb(220,220,220)", paddingBottom: "40px" }}
      >
        <div className="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
          <SpeakerCard
            photo={BillGates.photo}
            name={BillGates.name}
            text={BillGates.text}
          />
          <SpeakerCard
            photo={ElonMusk.photo}
            name={ElonMusk.name}
            text={ElonMusk.text}
          />
          <SpeakerCard
            photo={MarkZuckerberg.photo}
            name={MarkZuckerberg.name}
            text={MarkZuckerberg.text}
          />
        </div>

        <div className="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
          <SpeakerCard
            photo={BillGates.photo}
            name={BillGates.name}
            text={BillGates.text}
          />
          <SpeakerCard
            photo={ElonMusk.photo}
            name={ElonMusk.name}
            text={ElonMusk.text}
          />
          <SpeakerCard
            photo={MarkZuckerberg.photo}
            name={MarkZuckerberg.name}
            text={MarkZuckerberg.text}
          />
        </div>

        <div className="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
          <SpeakerCard
            photo={BillGates.photo}
            name={BillGates.name}
            text={BillGates.text}
          />
          <SpeakerCard
            photo={ElonMusk.photo}
            name={ElonMusk.name}
            text={ElonMusk.text}
          />
          <SpeakerCard
            photo={MarkZuckerberg.photo}
            name={MarkZuckerberg.name}
            text={MarkZuckerberg.text}
          />
        </div>
      </div>

      <div class="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
        <SpeakerCard
          photo={BillGates.photo}
          name={BillGates.name}
          text={BillGates.text}
        />
        <SpeakerCard
          photo={ElonMusk.photo}
          name={ElonMusk.name}
          text={ElonMusk.text}
        />
        <SpeakerCard
          photo={MarkZuckerberg.photo}
          name={MarkZuckerberg.name}
          text={MarkZuckerberg.text}
        />
      </div>
    </div>
  );
}
