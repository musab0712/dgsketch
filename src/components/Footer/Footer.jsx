import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
export default function Footer() {
  const handleCallDialerClick = () => {
    window.location.href = "tel:+918235822089";
  };

  const handleCallDialerClick1 = () => {
    window.location.href = "tel:+91123456789";
  };

  const handleEmailAppClick = () => {
    const emailID = "info@dgsketch.com"; // Replace with your email ID
    const emailURL = `mailto:${emailID}`;
    window.location.href = emailURL;
  };

  return (
    <footer className="bg-white p-4">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-10 me-3" alt="Logo" />
              </a>
              <p className="text-gray-500 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente cumque quisquam, optio, minus.
              </p>
              <div className="flex py-5">
                <a className=" pr-2" href="/">
                  <FaTwitterSquare className=" text-blue-500 w-6 h-6" />
                </a>
                <a className=" pr-2" href="/">
                  <FaLinkedinIn className=" text-blue-500 w-6 h-6" />
                </a>
                <a className=" pr-2" href="/">
                  <FaFacebook className=" text-blue-500 w-6 h-6" />
                </a>
                <a href="/">
                  <FaInstagramSquare className=" text-blue-500 w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Services
              </h2>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Wed Devlepment
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                App Development
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                CRM
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Search Engine Optimizatin
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Industries
              </h2>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Health Care
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Education
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                E-Commerce
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Manufacturing
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Company
              </h2>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                FAQ
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="/"
                className="text-gray-500  font-medium mb-4 hover:underline"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col">
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Contact
              </h2>
              <p className=" flex">
                <BsFillTelephoneOutboundFill size={20} />
                <span className=" text-gray-500">Phone </span>
              </p>
              <button onClick={handleCallDialerClick}>
                <p className="text-gray-500">+ 91-7352817229</p>
              </button>
              <button onClick={handleCallDialerClick1}>
                <p className="text-gray-500">+ 91-7352817229</p>
              </button>
              <p className=" flex pt-4">
                <AiFillMail size={25} />
                <span className="text-gray-500 pl-2 ">Email </span>
              </p>
              <button onClick={handleEmailAppClick}>
                <p className="text-gray-500 ">info@itconnectindia.com</p>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          © 2024 Copyright:
          <Link className="" href="/">
            DG Sketch
          </Link>
        </div>
      </div>
    </footer>
  );
}
