import React, { useState } from 'react';
import PropTypes from 'prop-types';

const shapes = {
  round: 'rounded-[5px]',
};
const variants = {
  fill: {
    blue_800: 'bg-blue-800 text-white-A700',
    white_A700: 'bg-white-A700 text-black-900',
  },
};
const sizes = {
  xs: 'h-[30px] pl-[11px] pr-[35px] text-lg',
  sm: 'h-[38px] pl-[27px] pr-[35px] text-lg',
  md: 'h-[42px] pl-[26px] pr-[35px] text-lg',
};

const Select = React.forwardRef(
  (
    {
      className = '',
      name = '',
      options = [],
      placeholder = '',
      children,
      label = '',
      prefix,
      suffix,
      onChange,
      shape,
      variant = 'fill',
      size = 'md',
      color = 'white_A700',
      ...restProps
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
      const selectedOption = e.target.value;
      setSelectedValue(selectedOption);
      if (onChange) onChange(e); // Pass the event object instead of just the selected value
    };

    return (
      <>
        <div
          className={`${className} text-lg relative flex justify-center ${
            (shape && shapes[shape]) || ''
          } ${variants[variant]?.[color] || variants[variant] || ''} ${
            sizes[size] || ''
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <select
            ref={ref}
            name={name}
            value={selectedValue}
            onChange={handleChange}
            {...restProps}
            className="w-full"
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {!!suffix && suffix}
        </div>
      </>
    );
  }
);

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['blue_800', 'white_A700']),
  onChange: PropTypes.func,
};

export { Select };
