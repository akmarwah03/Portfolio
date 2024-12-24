import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import me from "../Assets/Images/me.jpg";

const AboutMe = () => {
  return (
    <Element name="aboutme">
      <Fade bottom duration={600} distance="70px">
        <div className="grid w-9/12 gap-20 mx-auto mb-20 md-flow-row md:grid-flow-col md:mt-40 md:grid-col-3">
          <div>
            <h1
              className={`green-shadow relative text-green-700 text-center text-3xl md:text-3xl font-semibold md:w-max md:text-left`}
            >
              About Me <h2 className={`inline-block text-3xl`}>🧑</h2>
            </h1>
            <h2 className="mt-8 text-lg text-gray-600 ">
              Hello again! Thanks for scrolling this far!! 🤗 I am currently
              working as a Software Developer at{" "}
              <span className="text-green-700">Reva Solutions.</span>{" "}
            </h2>
            <h2 className="mt-10 text-lg text-gray-600">
              Other than coding, I spend most of my free time playing Dota 2{" "}
              <span className="cursive">(add me!)</span> or any other video
              games. 🤓 I've also been trying to improve at Chess so feel free
              to reach out to me for a match! ♟️
            </h2>
          </div>
          <div className="place-self-center">
            <img
              src={me}
              alt="Akshay Marwah"
              className="rounded-3xl"
              style={{
                minWidth: "250px",
                minHeight: "auto",
                height: "auto",
                width: "250px",
              }}
            />
          </div>
        </div>
      </Fade>
    </Element>
  );
};

export default AboutMe;
