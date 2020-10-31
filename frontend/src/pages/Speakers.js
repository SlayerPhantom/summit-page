import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import { Container } from "react-bootstrap";
import "../style.css";
import SpeakerCard from "../components/SpeakerCard";

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
  return (
    <div>
      <CustomNavbar />

      <div className="backgroundWrapper">
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
        <h4 className="col-lg-10 col-12 black text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          vulputate dignissim suspendisse in est ante in. Nec sagittis aliquam
          malesuada bibendum arcu vitae elementum curabitur. Consectetur purus
          ut faucibus pulvinar elementum integer enim neque. Nunc sed id semper
          risus in hendrerit gravida rutrum. Ac odio tempor orci dapibus
          ultrices in iaculis nunc. Quis commodo odio aenean sed adipiscing diam
          donec. Sapien eget mi proin sed. Arcu vitae elementum curabitur vitae
          nunc sed. Orci sagittis eu volutpat odio facilisis mauris sit amet
          massa. Eget duis at tellus at urna. Mus mauris vitae ultricies leo
          integer malesuada nunc vel risus. Sed odio morbi quis commodo odio
          aenean sed adipiscing.
          <br />
        </h4>
      </Container>

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

      <CustomFooter />
    </div>
  );
}
