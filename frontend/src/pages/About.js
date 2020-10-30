import React from "react";
import Dashboard from "../components/Dashboard";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";

const items = [
  {
    photo: "https://i.imgur.com/Kkcfhm7.jpg",
    name: "John",
    description: "JOHNN",
  },
  {
    photo: "https://i.imgur.com/bd2EhI2.jpg",
    name: "Billy",
    description: "BILLYY",
  },
  {
    photo: "https://i.imgur.com/WHSGElT.jpg",
    name: "Joel",
    description: "JOELL",
  },
];

export default function About() {
  return (
    <div>
      <CustomNavbar />

      <div class="row pt-5 d-flex justify-content-center align-items-center pl-0 pr-0 mt-0 mr-0 ml-0">
        <img class="col-xs about-img" src="{% static 'images/about.png' %}" />
        <img class="col-xs about-img" src="{% static 'images/about.png' %}" />
        <img class="col-xs about-img" src="{% static 'images/about.png' %}" />
      </div>

      <div class="bubble-background-about">
        <div class="container py-5 d-flex justify-content-center align-items-center flex-column">
          <h4 class="col-lg-10 col-12 blue text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            vulputate dignissim suspendisse in est ante in. Nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur. Consectetur purus
            ut faucibus pulvinar elementum integer enim neque. Nunc sed id
            semper risus in hendrerit gravida rutrum. Ac odio tempor orci
            dapibus ultrices in iaculis nunc. Quis commodo odio aenean sed
            adipiscing diam donec. Sapien eget mi proin sed. Arcu vitae
            elementum curabitur vitae nunc sed. Orci sagittis eu volutpat odio
            facilisis mauris sit amet massa. Eget duis at tellus at urna. Mus
            mauris vitae ultricies leo integer malesuada nunc vel risus. Sed
            odio morbi quis commodo odio aenean sed adipiscing.
            <br />
            <br />
            Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum arcu. Aenean et tortor at risus viverra adipiscing at.
            Ornare arcu dui vivamus arcu felis bibendum ut tristique. Lectus
            magna fringilla urna porttitor rhoncus dolor. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam. Cras adipiscing enim eu
            turpis egestas pretium. Scelerisque viverra mauris in aliquam. Id eu
            nisl nunc mi ipsum faucibus vitae aliquet nec. Purus gravida quis
            blandit turpis cursus. Risus feugiat in ante metus dictum at.
            Maecenas pharetra convallis posuere morbi. Quis eleifend quam
            adipiscing vitae proin. Turpis egestas maecenas pharetra convallis
            posuere morbi leo urna molestie. Volutpat maecenas volutpat blandit
            aliquam etiam erat. Arcu cursus vitae congue mauris rhoncus aenean.
            Etiam erat velit scelerisque in dictum non. Scelerisque felis
            imperdiet proin fermentum leo vel orci porta non.
          </h4>
        </div>
      </div>

      <CustomFooter />
    </div>
  );
}
