import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../../assets/img/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white p-4">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-10 me-3" alt="Logo" />
              </a>
              <p className="text-gray-500 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente cumque quisquam, optio, minus neque quidem in
                necessitatibus.
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
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Services
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Wed Devlepment
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    App Development
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    CRM
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Search Engine Optimizatin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Industries
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Health Care
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Education
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Reatail
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Logistic
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase ">
                Company
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      </div>
    </footer>
  );
}
