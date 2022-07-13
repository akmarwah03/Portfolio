import Siege from "../Assets/Images/Siege.png";
import Insta from "../Assets/Images/Insta.png";
import Vocab from "../Assets/Images/Vocab.png";
import Just from "../Assets/Images/Just.png";
import { Element } from "react-scroll";
import { useState } from "react";
import { X } from "react-feather";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const [instaVisible, setInstaVisible] = useState(false);
  const [vocabVisible, setVocabVisible] = useState(false);
  const [justVisible, setJustVisible] = useState(false);
  const [siegeVisible, setSiegeVisible] = useState(false);

  return (
    <Element name="projects">
      <div className="mx-5 my-12 md:w-10/12 md:mx-auto">
        <h2 className="my-6 text-2xl text-center text-green-500 cursive md:text-left">
          Click on any project to learn more!
        </h2>
        <div className="grid w-full grid-rows-2 gap-10 lg:grid-cols-12 place-items-center">
          <Fade left duration={700} delay={0}>
            <div className="container grid w-full h-full col-span-7 bg-yellow-200 cursor-pointer lg:col-span-7 rounded-2xl place-items-center">
              <img
                src={Insta}
                alt="InstaClone"
                className="w-auto p-5 h-96"
                onClick={() => setInstaVisible(true)}
              />
              {instaVisible && (
                <div className="overlay">
                  <X
                    className="absolute z-30 text-white right-10 top-6"
                    size={30}
                    style={{ strokeWidth: "3" }}
                    onClick={() => setInstaVisible(false)}
                  />
                  <div className="grid w-full h-full place-items-center">
                    <h2 className="text-2xl font-semibold">Instagram Clone</h2>
                    <p className="px-5 py-2 text-base">
                      A simple Instgram mobile-only clone which allows its user
                      to create account, create posts and stories and like and
                      comment on followed friend's posts.
                    </p>
                    <div className="flex flex-wrap w-11/12 gap-3 mx-auto text-base justify-evenly">
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        MongoDB
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Express
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        ReactJS
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        NodeJS
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        TailwindCSS
                      </p>
                    </div>
                    <div className="grid w-8/12 grid-flow-col mx-auto place-items-center">
                      <a
                        href="https://main--boisterous-bombolone-5c4878.netlify.app/"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        VIEW LIVE
                      </a>
                      <a
                        href="https://github.com/akmarwah03/instaclone-frontend"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fade>
          <Fade right duration={700} delay={0}>
            <div className="container grid w-full h-full col-span-7 bg-green-300 cursor-pointer lg:col-span-5 rounded-2xl place-items-center">
              <img
                src={Vocab}
                alt="VocabWar"
                className="w-auto p-5 h-96"
                onClick={() => setVocabVisible(true)}
              />
              {vocabVisible && (
                <div className="overlay">
                  <X
                    className="absolute z-30 text-white right-10 top-6"
                    size={30}
                    style={{ strokeWidth: "3" }}
                    onClick={() => setVocabVisible(false)}
                  />
                  <div className="grid w-full h-full place-items-center">
                    <h2 className="text-2xl font-semibold">VocabWar</h2>
                    <p className="px-5 py-2 text-base">
                      VocabWar is a two-player word game where players battle
                      using their vocabulary. To win you need to create more
                      words than the opponent player.
                    </p>
                    <div className="flex flex-wrap w-11/12 gap-3 mx-auto text-base justify-evenly">
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        React
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Firebase
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Reactfire
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        DictionaryAPI
                      </p>
                    </div>
                    <div className="grid w-8/12 grid-flow-col mx-auto place-items-center">
                      <a
                        href="https://vocabwar.netlify.app/"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        VIEW LIVE
                      </a>
                      <a
                        href="https://github.com/ParthCv/COMP-2800-Team-BBY-16-VocabWar"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fade>
          <Fade left duration={700} delay={0}>
            <div className="container grid w-full h-full col-span-7 bg-red-300 cursor-pointer lg:col-span-5 rounded-2xl place-items-center">
              <img
                src={Just}
                alt="JustRent"
                className="w-auto p-5 h-96"
                onClick={() => setJustVisible(true)}
              />
              {justVisible && (
                <div className="overlay">
                  <X
                    className="absolute z-30 text-white right-10 top-6"
                    size={30}
                    style={{ strokeWidth: "3" }}
                    onClick={() => setJustVisible(false)}
                  />
                  <div className="grid w-full h-full place-items-center">
                    <h2 className="text-2xl font-semibold">JustRent</h2>
                    <p className="px-5 py-2 text-base">
                      JustRent is a rental platform where users can get fitness
                      equipment like dumbbells, weight plates and kettlebells.
                    </p>
                    <div className="flex flex-wrap w-11/12 gap-3 mx-auto text-base justify-evenly">
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Javascript
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Firebase
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        jQuery
                      </p>
                    </div>
                    <div className="grid w-8/12 grid-flow-col mx-auto place-items-center">
                      <a
                        href="https://justrent-fff6d.web.app/"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        VIEW LIVE
                      </a>
                      <a
                        href="https://github.com/akmarwah03/JustRent"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fade>
          <Fade right duration={700} delay={0}>
            <div className="container grid w-full h-full col-span-7 bg-indigo-200 cursor-pointer rounded-2xl place-items-center">
              <img
                src={Siege}
                alt="SiegeFitness"
                className="w-auto p-5 h-96"
                onClick={() => setSiegeVisible(true)}
              />
              {siegeVisible && (
                <div className="overlay">
                  <X
                    className="absolute z-30 text-white right-10 top-6"
                    size={30}
                    style={{ strokeWidth: "3" }}
                    onClick={() => setSiegeVisible(false)}
                  />
                  <div className="grid w-full h-full place-items-center">
                    <h2 className="text-2xl font-semibold">SiegeFitness</h2>
                    <p className="px-5 py-2 text-base">
                      A product catelogue/enquiry site for a fitness equipment
                      manufacturer Siege Fitness. Showcases large variety of
                      equipments along with their specifications.
                    </p>
                    <div className="flex flex-wrap w-11/12 gap-3 mx-auto text-base justify-evenly">
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Wordpress
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        Woocommerce
                      </p>
                      <p className="px-2 py-1 text-gray-900 bg-gray-300 rounded-3xl">
                        WhatsappAPI
                      </p>
                    </div>
                    <div className="grid w-8/12 grid-flow-col mx-auto place-items-center">
                      <a
                        href="https://siegefitness.in"
                        className="px-3 py-2 text-base transition-all bg-green-500 rounded-lg hover:bg-gray-100 hover:text-green-500"
                        rel="noreferrer"
                        target="_blank"
                      >
                        VIEW LIVE
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
