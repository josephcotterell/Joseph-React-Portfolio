import React from "react";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Joseph Cotterell</h2>
        <div className="prompt">
          <p>Software Engineer</p>
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
