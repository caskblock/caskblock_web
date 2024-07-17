"use client";

import { menuItems } from "@/utils/menuItems";

const Footer = () => {
  return (
    <div className="bg-white border-gray-200 border-t w-full">
      <div className="flex gap-10 justify-between items-center h-full px-2 sm:px-8 md:px-24 py-6 flex-col md:flex-row">
        <div>
          { menuItems.filter((link) => link.mobile).map((link) => (
            <div className="text-sm text-gray-500" key={link.link}>
              <a href={link.link + "?skg=1"} target="_blank">{link.label}</a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <img style={{margin: "0 auto 16px"}} className="max-h-12 block" src={"/logo.png"} alt="logo" />
          <div className="text-sm text-gray-500">CaskBlock is a registered Brands under O Benefício Existe, Lda. license. <br/> 2024 O Benefício Existe, Lda. © All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
