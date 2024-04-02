import React from "react";

const sizes = {
  s: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  md: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xs: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
