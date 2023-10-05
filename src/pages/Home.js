import React from "react";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="prompt">
          <div>
            <img className="photo" src={require("../assets/profile.png")} />
          </div>
          <p>
            Hi, my name is Joseph and I am a junior software developer from
            Birmingham UK. Here you will find some of my projects as well as
            links to my Github and Linkdin pages.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, BootStrap, TailwindCSS,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,JavaScript ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
