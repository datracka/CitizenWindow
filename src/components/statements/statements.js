import React from "react";
import Statement from "components/statement";

import "./statements.css";

const Statements = () => (
  <section className="flex flex-col justify-center items-center w-full h-auto bg-white text-white mt-8 pl-8 pr-8">
    <Statement
      title="Mission"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image="mission"
      link="#"
    />
    <Statement
      title="Vision"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image="vision"
      link="#"
      reversed
    />
    <Statement
      title="Values"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image="values"
      link="#"
    />
    <Statement
      title="Team"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ratione eligendi aut quibusdam nesciunt repudiandae eveniet delectus alias commodi id!"
      image="team"
      link="#"
      reversed
    />
  </section>
);

export default Statements;
