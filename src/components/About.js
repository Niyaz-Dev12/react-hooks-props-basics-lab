import React from "react";
import Links from "./Links";

function About(props) {
  const bioExist=props.bio;
  const bio=<p>{props.bio}</p>
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioExist ? bio : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
