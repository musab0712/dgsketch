import { Button, Dropdown, Navbar, Popover } from "flowbite-react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width={100}
          height={100}
          className="mr-3 h-10 sm:h-12 "
          alt="Logo"
        />
      </Navbar.Brand>
      <div className="flex gap-1 md:order-2">
        <Button className=" rounded-full  ">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"}>
          <Link
            to="/"
            className=" text-lg font-semibold hover:font-bold hover:text-orange-600"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/about"
            className="text-lg font-semibold hover:font-bold hover:text-orange-600"
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/wd"
            className="text-lg font-semibold hover:font-bold hover:text-orange-600"
          >
            Services
          </Link>
        </Navbar.Link>

        <Navbar.Link as={"div"}>
          <Link
            to="/contact"
            className="text-lg font-semibold hover:font-bold hover:text-orange-600"
          >
            Contact
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
