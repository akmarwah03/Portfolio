import { Element } from "react-scroll";
import HTML from "../Assets/Images/html.svg";
import CSS from "../Assets/Images/css.svg";
import EXPRESS from "../Assets/Images/express.png";
import FIREBASE from "../Assets/Images/firebase.svg";
import JS from "../Assets/Images/javascript.svg";
import JQUERY from "../Assets/Images/jquery.svg";
import REACT from "../Assets/Images/react.svg";
import MONGO from "../Assets/Images/mongodb.png";
import NODE from "../Assets/Images/nodejs.svg";
import GITHUB from "../Assets/Images/github.svg";
import JAVA from "../Assets/Images/java.svg";
import SERVICENOW from "../Assets/Images/servicenow.png";
import SVELTE from "../Assets/Images/svelte.png";
import Fade from "react-reveal/Fade";

const Toolkit = () => {
  return (
    <Element name="toolkit">
      <Fade bottom duration={600} distance="70px">
        <div className="w-9/12 mx-auto">
          <h1 className="relative overflow-hidden text-3xl font-semibold text-center text-green-700 md:text-left green-shadow md:text-3xl md:w-max">
            My Toolkit <h2 className={`inline-block text-3xl`}>💻</h2>
          </h1>
          <div className="flex flex-wrap justify-center w-11/12 gap-10 mx-auto my-16 text-base md:gap-20 ">
            <div className="grid place-items-center">
              <img src={HTML} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">HTML5</h3>
            </div>
            <div className="grid place-items-center">
              <img src={REACT} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">ReactJS</h3>
            </div>
            <div className="grid place-items-center">
              <img src={JS} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">Javascript</h3>
            </div>
            <div className="grid place-items-center">
              <img src={NODE} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">NodeJS</h3>
            </div>
            <div className="grid place-items-center">
              <img src={MONGO} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">MongoDB</h3>
            </div>
            <div className="grid place-items-center">
              <img src={SVELTE} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">Svelte</h3>
            </div>
            <div className="grid place-items-center">
              <img src={SERVICENOW} alt="" className="w-14 h-auto" />
              <h3 className="text-lg cursive">ServiceNow</h3>
            </div>
            <div className="grid place-items-center">
              <img src={EXPRESS} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">Express</h3>
            </div>
            <div className="grid place-items-center">
              <img src={JQUERY} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">jQuery</h3>
            </div>
            <div className="grid place-items-center">
              <img src={FIREBASE} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">Firebase</h3>
            </div>
            <div className="grid place-items-center">
              <img src={GITHUB} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">GitHub</h3>
            </div>
            <div className="grid place-items-center">
              <img src={JAVA} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">Java</h3>
            </div>
            <div className="grid place-items-center">
              <img src={CSS} alt="" className="w-auto h-14" />
              <h3 className="text-lg cursive">CSS3</h3>
            </div>
          </div>
        </div>
      </Fade>
    </Element>
  );
};

export default Toolkit;
