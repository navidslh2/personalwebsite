import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";d
import { FaTelegram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-5 text-3xl">

      <Link href="https://instagram.com/navidslh" target="_blank">
        <FaInstagram className="text-red-400"/>
      </Link>
      <Link
        href="https://www.linkedin.com/in/navid-salehi-3b4a57341"
        target="_blank"
      >
        <FaLinkedin className="text-blue-600"/>
      </Link>
      <Link href="https://t.me/navidslh" target="_blank">
        <FaTelegram className="text-blue-400"/>
      </Link>
    </div>
  );
};

export default SocialMedia;
