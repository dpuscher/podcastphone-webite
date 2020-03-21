import PropTypes from "prop-types";
import React from "react";

const MenuIcon = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
  >
    <path
      fill={color}
      d="M91.8 23.6H8.2A8.2 8.2 0 118.2 7h83.6a8.2 8.2 0 110 16.5zM91.8 92.9H8.2a8.2 8.2 0 110-16.5h83.6a8.2 8.2 0 110 16.5zM91.8 58.2H8.2a8.2 8.2 0 110-16.4h83.6a8.2 8.2 0 110 16.4z"
    />
  </svg>
);

MenuIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
};

MenuIcon.defaultProps = {
  color: undefined,
};

export default MenuIcon;
