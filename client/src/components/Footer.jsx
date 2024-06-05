import React from "react";

function Footer() {
  return (
    <div className="footer-container text-sm md:text-md lg:text-lg xl:text-xl text-center">
      <p>
        &copy; {new Date().getFullYear()} Pho Viet Restaurant. All rights
        reserved.
      </p>
      <p>
        <a href="" className="hover:underline mr-2">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="" className="hover:underline ml-2">
          Terms of services
        </a>
      </p>
    </div>
  );
}

export default Footer;
