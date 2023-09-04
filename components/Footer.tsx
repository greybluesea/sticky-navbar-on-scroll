import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" w-full mb-14 flex flex-row justify-center">
      <ul className="hidden  md:flex md:flex-col mt-auto  mx-auto  justify-end items-center bg-transparent space-y-1 px-7 py-5 rounded-xl w-160">
        <li className="text-2xl ">ShadcnUI + next-themes + frosty header</li>
        <li>learned from codeSTACKr & SaraevMedia, powered by greybluesea</li>
        <li></li>
      </ul>
    </footer>
  );
};

export default Footer;
