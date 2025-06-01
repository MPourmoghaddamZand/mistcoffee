import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, link }) => {
  return (
    <Link to={link}>
      {/* Using a div to style the button, as Link does not support styling directly */}
      <div className="text-center py-5 rounded-full w-10/12 m-auto text-white bg-mysecondary">
        {children}
      </div>
    </Link>
  );
};

export default Button;
