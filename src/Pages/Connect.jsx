import { Linkedin, Twitter, GitHub, Mail } from "react-feather";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

const Connect = () => {
  return (
    <Element name="connect" className="overflow-hidden">
      <Fade bottom duration={600} distance="70px" className="overflow-hidden">
        <div className="w-screen py-20 overflow-hidden bg-green-300 md:py-28">
          <div className="w-9/12 gap-20 mx-auto lg:grid lg:grid-cols-3">
            <div className="md:col-span-1">
              <h1 className="relative overflow-hidden text-3xl font-semibold text-center text-green-700 md:text-3xl md:w-max md:text-left">
                Let's Connect! <h2 className={`inline-block text-3xl`}>✉️</h2>
              </h1>
              <p className="mt-5 text-center text-gray-600 md:text-left">
                If you ever want to grab a coffee or just want a quick chat -
                you can find me on social media or you can send me a message
                here!
              </p>
              <div className="grid grid-flow-col mt-8 place-items-center">
                <a
                  href="https://linkedin.com/in/akshay-marwah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin
                    className="text-green-700"
                    size={30}
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="https://twitter.com/akshaymarwah8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter
                    className="text-green-700"
                    size={30}
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="https://github.com/akmarwah03"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub
                    className="text-green-700"
                    size={30}
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="mailto:amarwah4@my.bcit.ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail
                    className="text-green-700"
                    size={30}
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
            <div className="col-span-2">
              <form
                method="POST"
                name="contact"
                action="/?success=true"
                className="grid grid-flow-row gap-4 mt-10 lg:mt-0"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  className="px-4 py-2 border-2 border-green-300 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="px-4 py-2 border-2 border-green-300 rounded-lg"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="message"
                  className="h-48 px-4 py-2 border-2 border-green-300 rounded-lg resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-40 px-4 py-3 text-white bg-green-700 rounded-lg place-self-center md:place-self-start"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </Element>
  );
};

export default Connect;
