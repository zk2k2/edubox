import React from "react";
import Switch from "react-switch"; // Updated import
import PropTypes from "prop-types";

const sizes = {
  xs: {
    width: 70,
    height: 35,
  },
};

const CustomSwitch = ({
  value = false,
  className,
  checkedIcon = null, // Removed <></> for null
  uncheckedIcon = null, // Removed <></> for null
  onChange,
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <Switch
        checked={selected}
        onChange={handleChange}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

CustomSwitch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
};

export { CustomSwitch as Switch }; // Exporting as CustomSwitch to avoid conflicts
