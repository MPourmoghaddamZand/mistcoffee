import React from "react";

export const StyledEllipse5 = {
  boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.60) inset",
};
const CircleProduct = ({ children }) => {
  return (
    <div
      style={StyledEllipse5}
      className="w-4/5 max-w-[140px] drop-shadow-[0px_0px_2px_#000] bg-white rounded-full p-2 absolute -top-10"
    >
      {children}
    </div>
  );
};

export default CircleProduct;
