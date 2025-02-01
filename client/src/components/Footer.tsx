function Footer() {
  return (
    <div className="footer-container text-center footer bg-gray-800 text-white py-4 mt-4" >
      <h3>
        &copy; {new Date().getFullYear()} Pho Viet Restaurant. All rights
        reserved.
      </h3>
      <h3>
        <a href="" className="hover:underline mr-2">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="" className="hover:underline ml-2">
          Terms of Services
        </a>
      </h3>
    </div>
  );
}

export default Footer;
