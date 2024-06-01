import React from 'react';
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

const Input = React.forwardRef(
  (
    {
      className = '',
      name = '',
      placeholder = '',
      type = 'text',
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
    const handleChange = (e) => {
      if (onChange) onChange(e);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center text-lg  ${
            (shape && shapes[shape]) || ''
          } ${variants[variant]?.[color] || variants[variant] || ''} ${
            sizes[size] || ''
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
      </>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  variant: PropTypes.oneOf(['fill']),
  color: PropTypes.oneOf(['blue_800', 'white_A700']),
};

export { Input };
