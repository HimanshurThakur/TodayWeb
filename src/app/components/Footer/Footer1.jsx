import React from "react";
import Link from 'next/link';
import "../../styles/Footer1.css";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

function Footer1() {
  return (
    <>
      <div className="bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-3">
        <div className="p-7">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              <img
                src="https://geecomindia.in/public/images/logo.png"
                alt="Geecom India"
                className="logo-image"
              />
            </p>
            <li className="text-gray-500 text-md pb-8 font-semibold hover:text-blue-600">
              GeeCom is a Win-Win E-commerce <br />platform that will uplift,
              empower, and<br /> transform millions of lives of Indian
              <br /> farmers and people in Rural India.
            </li>
           
            <div className="flex gap-8 pb-8">
              <Link
                href="https://www.instagram.com/geecomindia/"               
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl cursor-pointer hover:text-red-600" />
              </Link>
              <a
                href="https://twitter.com/GeecomIndia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/company/geecom-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQJmXoMng4XBr3K-bhweICg/playlists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </a>
              <a
                href="https://www.facebook.com/geecomind/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="animatedP text-gray-800 font-bold text-2xl pb-4">
              Quick Links
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="https://geecomindia.com/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Payment Terms
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Refund Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="https://geecomindia.in/franchise/cancellation-and-return-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cancellation & Return policy
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="animatedP text-gray-800 font-bold text-2xl pb-4">
              Company
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="https://www.youtube.com/watch?v=CsW5kwCPfDI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="  https://geecomindia.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="https://geecomindia.com/our-mission"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mission & Vision
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              How To Use
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a
                href="https://play.google.com/store/apps/details?id=com.geecomindia&hl=hi"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Link
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="animatedP text-gray-800 font-bold text-2xl pb-4">
              Contact Us
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 ">
              <a href="https://maps.google.com/maps?q=324+Shagun+Tower+Vijay+Nagar+Indore+MP-452010">
                <span className="span-footer">Address: </span> 324, Shagun Tower
                Vijay Nagar, Indore MP-452010
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 ">
              <span className="span-footer">Phone: </span>
              <a href="tel:+917259931071"> +91-7259931071</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Email: </span>
              <a href="mailto:contact@geecomindia.com">
                contact@geecomindia.com
              </a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <span className="span-footer">Open hours: </span> Mon- Sat: 9:30
              AM to 7PM
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer1;
