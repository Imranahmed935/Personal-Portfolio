import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4">
     <div className="lg:w-8/12 mx-auto flex justify-center items-center">
     <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
     </div>
    </footer>
  );
};

export default Footer;
