import React from "react";
import logo from "../../images/img1.jpg";
import { FaFacebookF, FaMobileAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () =>
{
  return (
    <div
      data-aos="zoom-out"
      data-aos-offset={0}
      className="bg-primaryColor/80 pb-0  pt-28  pl-10  w-full min-h-[550px] mt-20"
    >
      <div className="container mx-auto max-w-[1450px] pl-12 pr-10">
        <div className="grid grid-rows-1 grid-cols-4 text-white items-start gap-10">
          {/* 1st column logo + Social  */}
          <div
            data-aos="zoom-out"
            className=" flex flex-col gap-12 items-start max-w-[400px] mt-0 pt-0 font-contentFont -ml-9"
          >
            {/* Logo + description + Social*/}
            <div className="mt-0 pt-0">
              <Link
                to="/"
                className="font-bold text-black flex gap-3  mr-5 no-underline items-center text-2xl  sm:text-3xl"
              >
                <img src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" className="w-40 h-10 uppercase " />
              </Link>
            </div>
            <div className="w-[300px]">
              <p className="text-[17px] pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium suscipit eum animi possimus.{" "}
              </p>
            </div>
            {/* Social */}
            <div>
              <div className="flex gap-2 -mt-4 pl-2 text-white  justify-center items-center text-center">
                {/* Facebook */}
                <div className="w-12 h-12 rounded-full  text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.facebook.com/?locale=ar_AR"
                    target="self"
                    className="text-white hover:text-white"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </div>

                {/* Instagram */}
                <div className="w-12 h-12 rounded-full  text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.instagram.com/?hl=ar"
                    target="self"
                    className="text-white hover:text-white"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>

                {/* Twitter */}
                <div className="w-12 h-12 rounded-full  text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group ">
                  <a
                    href="https://twitter.com/?lang=ar"
                    target="self"
                    className="text-white hover:text-white"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>

                {/* Linkedin */}
                <div className="w-12 h-12 rounded-full  text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.linkedin.com/"
                    target="self"
                    className="text-white hover:text-white"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd column  For Instructors  */}
          <div data-aos="fade-up" className="  font-contentFont ">
            <div className="max-w[300px]">
              {/* Title */}
              <div className="border-b-2 w-[200px]">
                <h3 className="font-headingFont pb-2 ">For Instructors</h3>
              </div>
              {/* List */}
              <div className="grid grid-cols-1">
                {/* Col 1 */}
                <div className=" flex flex-col gap-3 text-xl">
                  {/* Profile */}
                  <div className=" flex  gap-2 items-center justify-start mt-4">

                    <a
                      href="/Profile"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Profile
                    </a>
                  </div>
                  {/* Login */}
                  <div className=" flex  gap-2 items-center justify-start ">

                    <a
                      href="/Login"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Login
                    </a>
                  </div>
                  {/* Register */}
                  <div className=" flex  gap-2 items-center justify-start   ">

                    <a
                      href="/Register"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Register
                    </a>
                  </div>
                  {/* Students */}
                  <div className=" flex  gap-2 items-center justify-start   ">

                    <a
                      href="/Students"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Students
                    </a>
                  </div>
                  {/* Dashboard */}
                  <div className=" flex  gap-2 items-center justify-start  ">

                    <a
                      href="/Dashboard"
                      className="text-xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Dashboard
                    </a>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* 3rd column  Services*/}
          <div data-aos="fade-up" className="  font-contentFont ">
            <div className="max-w[300px]">
              {/* Title */}
              <div className="border-b-2 w-[200px]">
                <h3 className="font-headingFont pb-2 pl-4">For Students</h3>
              </div>
              {/* List */}
              <div className="grid grid-cols-1">
                {/* Col 1 */}
                <div className=" flex flex-col gap-3 text-xl">
                  {/* Profile */}
                  <div className=" flex  gap-2 items-center justify-start mt-4">
                    <a
                      href="/Profile"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Profile
                    </a>
                  </div>
                  {/* Login */}
                  <div className=" flex  gap-2 items-center justify-start ">
                    <a
                      href="/Login"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Login
                    </a>
                  </div>
                  {/* Register */}
                  <div className=" flex  gap-2 items-center justify-start   ">
                    <a
                      href="/Register"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Register
                    </a>
                  </div>
                  {/* Instructors */}
                  <div className=" flex  gap-2 items-center justify-start   ">
                    <a
                      href="/Instructors"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Instructors
                    </a>
                  </div>
                  {/* Dashboard */}
                  <div className=" flex  gap-2 items-center justify-start  ">
                    <a
                      href="/Dashboard"
                      className="text-xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Dashboard
                    </a>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* 4 column  Services*/}
          <div
            data-aos="fade-up"
            className="pl-3 flex justify-end font-contentFont"
          >
            <div className="max-w-[300px]">
              {/* Title */}
              <div className="border-b-2 w-[200px]">
                <h3 className="font-headingFont pb-2">Get In Touch</h3>
              </div>
              {/* Location */}
              <div className="flex flex-row gap-2 items-center  my-4">
                <FaLocationArrow className="text-4xl " />
                <h5 className="mt-2 font-bold text-xl ">Cairo , Egypt</h5>
              </div>

              {/* Phone Number */}
              <div className="flex flex-row gap-2 items-center -mt-4 ">
                <FaMobileAlt className="text-4xl " />
                <p className="pt-3 font-bold text-xl ">+02 123 456 8799</p>
              </div>

              {/* Email */}
              <div className="flex flex-row gap-2 items-center  my-3  text-wrap">
                <MdOutlineEmail className="text-4xl text-white" />
                <p className="pt-3 font-bold text-[16px] text-wrap max-w[50px] ">
                  DreamsLMS@domainsite.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
