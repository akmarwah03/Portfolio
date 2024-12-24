import Avatar from "../Assets/Images/avatar.png";
import { ChevronDown } from "react-feather";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <div className="grid w-screen h-correct place-items-center">
        <div className="grid w-10/12 grid-flow-row gap-8 text-center md:grid-flow-col xl:w-9/12 place-items-center md:text-left">
          <Fade up fraction={0} duration={300}>
            <div className="">
              <h1
                className={`green-shadow relative text-green-700 text-3xl md:text-5xl font-semibold md:w-max`}
              >
                Hello! I'm Akshay.{" "}
                <h2 className={`${styles.hi} inline-block text-4xl`}>👋</h2>
              </h1>
              <h2 className="mt-5 text-xl text-gray-600 ">
                A creative aspiring{" "}
                <span className="text-green-700">developer</span> and{" "}
                <span className="text-green-700">designer</span> with a passion
                for creating robust, entertaining user experiences. ⭐
              </h2>
              <h2 className="text-xl text-gray-600 mt-7">
                Currently working at{" "}
                <a href="https://www.revasolutions.com/" target="_blank" rel="noreferrer" aria-label="Reva Solutions">
                  <span className="text-green-700">Reva Solutions</span>
                </a>{" "}
                as a Software Developer. 📚
              </h2>
            </div>
          </Fade>
          <Fade up fraction={0} duration={300}>
            <div>
              <img
                src={Avatar}
                alt="Avatar"
                className="rounded-full"
                style={{
                  minWidth: "200px",
                  minHeight: "200px",
                  height: "200px",
                  width: "200px",
                }}
              />
            </div>
          </Fade>
        </div>
      </div>

      <ChevronDown
        className={`${styles.chevron} mx-auto  text-green-700`}
        size={30}
        style={{ strokeWidth: "3" }}
      />
    </>
  );
};

export default Home;
