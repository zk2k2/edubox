import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-normal",
  s: "text-[15px] font-normal",
  "2xl": "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  xl: "text-2xl font-medium md:text-[22px]",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
