import React from "react";
import Statement from "components/statement";
import missionImage from "../../../imgs/mission.png";
import visionImage from "../../../imgs/vision.png";
import valuesImage from "../../../imgs/values.png";
import teamImage from "../../../imgs/team.png";

import "./statements.css";

const Statements = () => (
  <section className="flex flex-col justify-center items-center w-full h-auto bg-white text-white mt-8">
    <Statement
      title="Mission"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image={missionImage}
      link="#"
    />
    <Statement
      title="Vision"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image={visionImage}
      link="#"
      reversed
    />
    <Statement
      title="Values"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image={valuesImage}
      link="#"
    />
    <Statement
      title="Team"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image={teamImage}
      link="#"
      reversed
    />
  </section>
);

export default Statements;
