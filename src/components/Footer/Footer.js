import React from "react";
import Icon from "../Icon/Icon";
import Form from "../Form/Form";
import aamna from "../../images/Aamna.jpeg";

import Grid from "@material-ui/core/Grid";

import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="footer" id="about">
      <div className="content_container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-once={true}
              data-aos-duration={1500}
              className="img_container"
              style={{ backgroundImage: `url(${aamna})` }}
            ></div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-once={true}
              data-aos-delay={props.duration}
              data-aos-duration={800}
              className="about_container"
            >
              <p className="about_info">
                I am Aamna Suhail, a recent Master's graduate in Computer
                Applications from Jamia Hamdard University. Throughout my
                academic journey, I have been fueled by a deep passion for
                programming and the endless possibilities it offers to turn
                imagination into tangible solutions.
                <br /> My expertise in web development shines through numerous
                projects where I have skillfully utilized React.js, Node.js,
                Express, MongoDB, Mongoose, Jwt, and an array of JavaScript
                libraries. These tools have allowed me to craft dynamic and
                efficient applications that not only meet user needs but also
                push the boundaries of what technology can achieve. <br /> For
                me, blending aesthetics with functionality is key to providing
                an unforgettable user experience. What truly sets me apart is my
                unwavering belief that programming goes beyond securing a
                high-paying job; it is a transformative process where ideas take
                shape, creating meaningful impacts on people's lives. This
                passion and dedication drive me to explore new challenges and
                continuously refine my skills.
              </p>
              <Icon size="small" section="footer" />
              <div className="contact_container">
                <div className="contact_info">
                  <h4 className="contact_mail">
                    MAIL: aamnasuhail13213@gmail.com
                  </h4>
                  <h4 className="contact_mail">MOBILE PHONE: +91 9870973596</h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* contact box */}

      {/* about box */}

      {/* form */}

      <Form />

      <p className="copyright">&#169;Designed and Developed by Aamna Suhail</p>
    </div>
  );
};

export default Footer;
