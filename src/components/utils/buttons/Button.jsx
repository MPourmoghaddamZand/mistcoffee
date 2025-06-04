import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, link, className = "" }) => {
  return (
    <>
      {link !== undefined ? (
        <Link to={link}>
          {/* Using a div to style the button, as Link does not support styling directly */}
          <div className={`text-center py-4 rounded-full w-10/12 m-auto text-white bg-mysecondary ${className}`}>
            {children}
          </div>
        </Link>
      ) : (
          <div className={`text-center py-4 rounded-full w-10/12 m-auto text-white bg-mysecondary cursor-pointer ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default Button;
