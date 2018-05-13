import React from "react";
import "./statement.css";
import classNames from "classnames";

const Statement = ({ title, text, image, link, reversed }) => (
  <div className="flex flex-wrap direction-row w-full mt-8 md:ml-24">
    <div
      className={classNames({
        "statement-image": true,
        "bg-cover": true,
        "bg-center": true,
        "w-full": true,
        "md:w-2/5": true,
        "h-32": true,
        "md:h-64": true,
        "statement-image-mission": image === "mission",
        "statement-image-vision": image === "vision",
        "statement-image-values": image === "values",
        "statement-image-team": image === "team"
      })}
    />
    <div className="w-full md:w-2/5 md:ml-4">
      <h1 className="heading1 text-secondary-black mt-4">{title}</h1>
      <p className="main-text text-primary-grey mt-2">{text}</p>
      <a href={link} className="link-big mt-2 block">
        Read More
      </a>
    </div>
  </div>
);

export default Statement;
