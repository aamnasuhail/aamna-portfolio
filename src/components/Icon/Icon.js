import React from "react";

import "./Icon.css";

import { FiGithub } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { Link } from "@material-ui/core";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const Icon = (props) => {
  let iconBoxClasses =
    props.size === "large" ? ["icon", "icon--large"] : ["icon", "icon--small"];
  let iconStyleClass =
    props.size === "large" ? "largeIconStyle" : "smallIconStyle";

  const iconsArray = [
    {
      iconName: "instagram",
      icon: <FaInstagram className={iconStyleClass} />,
      link: "https://www.instagram.com/tech_with_as_/",
    },
    {
      iconName: "linkedin",
      icon: <FaLinkedinIn className={iconStyleClass} />,
      link: "https://www.linkedin.com/in/aamna-suhail-096bb123b",
    },
    {
      iconName: "github",
      icon: <FiGithub className={iconStyleClass} />,
      link: "https://github.com/aamnasuhail",
    },
    {
      iconName: "whatsapp",
      icon: <ImWhatsapp className={iconStyleClass} />,
      link: "https://wa.me/+919870973596",
    },
  ];
  return (
    <div className="icon_container">
      {iconsArray.map((el) => (
        <Link
          href={`${el.link}`}
          target="_blank"
          className={el.iconName + " " + iconBoxClasses.join(" ")}
          key={el.iconName}
        >
          {el.icon}
          <div className="toolTip">
            {el.iconName.slice(0, 1).toUpperCase() + el.iconName.slice(1)}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Icon;
