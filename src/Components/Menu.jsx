import { X } from "react-feather";
import { Link } from "react-scroll";

const Menu = (props) => {
  const closeMenuHandler = () => {
    props.closeMenu(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 grid w-screen bg-green-400 h-correct place-items-center">
      <X
        className="fixed text-white right-10 top-6"
        size={30}
        style={{ strokeWidth: "3" }}
        onClick={closeMenuHandler}
      />
      <div className="grid text-3xl font-semibold text-gray-100 place-items-center h-1/3 ">
        <Link
          onClick={closeMenuHandler}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h2 className="hover:text-green-700">Projects</h2>
        </Link>
        <Link
          onClick={closeMenuHandler}
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <h2 className="hover:text-green-700">About Me</h2>
        </Link>
        <Link
          onClick={closeMenuHandler}
          to="toolkit"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <h2 className="hover:text-green-700">My Toolkit</h2>
        </Link>
        <Link
          onClick={closeMenuHandler}
          to="connect"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h2 className="hover:text-green-700">Contact</h2>
        </Link>
        <a href="https://raghavmarwah.com">
          <h2 className="hover:text-green-700">Raghav Marwah</h2>
        </a>
      </div>
    </div>
  );
};

export default Menu;
