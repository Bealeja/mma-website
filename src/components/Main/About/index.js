import React from "react";
import "./index.scss";

export default function About() {
  return (
    <div className="about">
      {/* <!-- About Us --> */}
      <div className="section is-black">
        <div className="box">
          <h1 className="blackbackground">About Us</h1>
          <div>
            <p>
              The BJJ club's commitment to supporting local tournaments is a
              cornerstone of its community involvement. By participating in and
              promoting these events, the club fosters a sense of camaraderie
              and competition among its members and the broader BJJ community.
              The club also recognizes the importance of providing its members
              with the training and support necessary to succeed in these
              competitions. With this in mind, it offers regular training
              sessions, personalized coaching, and access to top-notch
              facilities and equipment. As a result, the club has produced
              numerous successful fighters who have gone on to win titles and
              gain recognition in the sport.
            </p>
            <br />
            <p>
              But the club's commitment to BJJ goes beyond just competitive
              success. It also places a strong emphasis on good sportsmanship,
              respect, and discipline. Members are expected to conduct
              themselves with dignity and respect, both inside and outside the
              dojo. The club recognizes that these values are integral to
              personal growth and success, and instills them in its members
              through regular training and positive reinforcement. The result is
              a group of individuals who are not only skilled fighters but also
              positive role models in their communities.
            </p>
            <br />
            <p>
              As the club continues to grow and produce talented fighters, it
              also places a strong emphasis on marketing and promoting its
              members. By showcasing their achievements and potential, the club
              raises awareness of BJJ as a sport and helps to grow its local
              community. This includes social media promotion, newsletters, and
              even collaborations with local businesses and organizations. By
              doing so, the club not only supports its own members' aspirations
              but also contributes to the growth and development of BJJ as a
              whole.
            </p>
            <br />
            <p>
              In summary, the BJJ club's commitment to supporting local
              tournaments and promoting good values is integral to its success.
              By providing its members with the necessary training and support,
              instilling positive values, and promoting its fighters, the club
              has established itself as a leading force in the local BJJ
              community. It serves as a beacon for those seeking personal
              growth, athletic achievement, and community involvement.
            </p>
          </div>
        </div>
        <div className="box">
          <iframe
            width="700"
            height="800"
            src="https://www.youtube.com/embed/57q_S_Y7JgA?controls=0?autoplay=1"
            frameBorder="0"
          ></iframe>
          {/* <!-- <img src="./assets/Bjj_cropped.png" class="aboutusmedia" /> --> */}
        </div>
      </div>
    </div>
  );
}
