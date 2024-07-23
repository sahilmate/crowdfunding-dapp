import React from "react";

const Footer = () => {
  // Information about the company, products, and contact details
  const companyInfo = {
    companyName: "Pledge Pulse",
    companyDescription:
      "Pledge Pulse is a revolutionary crowdfunding platform that empowers individuals and organizations to bring their innovative ideas to life. Whether you're a startup entrepreneur, a creative artist, or a community activist, Pledge Pulse provides the tools and resources you need to fundraise, connect with backers, and turn your vision into reality. Join Pledge Pulse today and embark on your journey to success!",
    productList: ["Market", "Erc20 Token", "Donation"],
    usefulLinks: ["Home", "About us", "Company Bio"],
    contactList: [
      "support@pledgepulse.com",
      "info@example.com",
      "Contact us",
    ],
  };

  return (
    <footer className="text-center text-white bg-gray-800 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <h6 className="mb-4 text-xl font-semibold uppercase">
              {companyInfo.companyName}
            </h6>
            <p>{companyInfo.companyDescription}</p>
          </div>
          {/* Products */}
          <div>
            <h6 className="mb-4 text-xl font-semibold uppercase">Products</h6>
            {companyInfo.productList.map((product, index) => (
              <p className="mb-2" key={index}>
                <a href="#!" className="text-gray-300 hover:text-white">
                  {product}
                </a>
              </p>
            ))}
          </div>
          {/* Useful Links */}
          <div>
            <h6 className="mb-4 text-xl font-semibold uppercase">
              Useful Links
            </h6>
            {companyInfo.usefulLinks.map((link, index) => (
              <p className="mb-2" key={index}>
                <a href="#!" className="text-gray-300 hover:text-white">
                  {link}
                </a>
              </p>
            ))}
          </div>
          {/* Contact Information */}
          <div>
            <h6 className="mb-4 text-xl font-semibold uppercase">Contact</h6>
            {companyInfo.contactList.map((contact, index) => (
              <p className="mb-2" key={index}>
                <a href="#!" className="text-gray-300 hover:text-white">
                  {contact}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright Information */}
      <div className="bg-gray-700 p-6 text-center">
        <span className="text-gray-400">&copy; {new Date().getFullYear()} </span>
        <a href="https://pledgepulse.com" className="font-semibold text-white">
          {companyInfo.companyName}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
