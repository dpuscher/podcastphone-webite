import PropTypes from "prop-types";
import React from "react";

const BrandIcon = ({ width, color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={Math.ceil(width * (142 / 129))}
    viewBox="0 0 129 142"
    className={className}
  >
    <g fill={color}>
      <path d="M30.4 66.8c1.6-.8 2.5-1.7 2.7-3.7a6.3 6.3 0 012.5-4.2c2-1.4 4.2-2.4 6.5-3a100.4 100.4 0 0147 1c3 .7 5.8 2.6 6 5.7 0 3.3 2 4 4.3 4.8 2.7.9 5.4 1.8 8.2 2.5a39.8 39.8 0 0020.6-.8c-1-6.2-3-12.2-5.7-17.9-.9-2-2.6-3.5-4.7-4A178.9 178.9 0 0014.1 46c-5 1.4-8 4-9.5 8.8L0 69.4l3.7 1.1c9.4 2.5 18.3.7 26.7-3.7z" />
      <path d="M128.2 71.7a47.5 47.5 0 01-32.7-3.4c-.6 7.7 1.7 12.6 7.2 15a30.7 30.7 0 0020 1.3 8 8 0 004.2-3.3c1.8-2.8 1.6-6.1 1.3-9.6zM32.6 68.8a39.8 39.8 0 01-32.4 3c.2 3 .2 5.2.6 7.6.5 3.6 2.8 5.7 6.5 6.4 5 1 10.3.7 15.3-.6 7.6-2 11.5-8.4 10-16.4z" />
      <path d="M91.8 79.5c-1-1.7-1.5-3.6-1.6-5.6-.3-3.2-.1-6.4-.1-9.6H75V73H53.7v-9H38.9c0 3.6.2 7.1 0 10.5 0 1.5-.4 3-1.2 4.3-5.3 8.7-10.5 17.5-16.3 26-7.7 11.4-7.5 24-6.8 37H114v-18.4c0-6.5-2.6-12.1-6-17.5-5.5-8.8-11-17.6-16.3-26.5zm-39 53.6l-.2.2a1.8 1.8 0 01-2.9.3 45 45 0 01-6.2-6.2 26.1 26.1 0 019.2-38.6l1.8-.8c.5.5 1.2 1 1.4 1.5 0 .7 0 1.4-.4 2-.3.3-.8.5-1.3.7a22.4 22.4 0 00-2.7 38l.5.4c.9.4 1.2 1.6.8 2.5zm5-31.2c0 .4-.6.7-1 1a12 12 0 00-1.6 16.7l.3.3c.9 1.1.8 2.2 0 3-1 .7-2 .5-3-.6a15 15 0 01-3.6-8.6 15.6 15.6 0 015.8-14l1.6-.9c.6.4 1.3.6 1.5 1.1.2.7.2 1.4 0 2zm16 21c-1-.8-1-1.9 0-3a12 12 0 00-1.8-17.2c-1.2-1-1.4-2-.6-3s2-.8 3.1.1a15.7 15.7 0 012.2 22.4c-1 1.2-2 1.4-3 .7zm5.8 10.5c-.7.4-1.6.6-2.4.4-1.4-.5-1.3-2.2 0-3.2a22.3 22.3 0 00-1.8-38.2c-.4-.2-.8-.3-1.1-.6-1-.6-1.5-1.4-1-2.5a1.7 1.7 0 012.7-.8c2.5 1.7 5.2 3.3 7.3 5.4a25.9 25.9 0 01-3.7 39.5zM21.5 30.3c2 1.3 3.7.4 5-1.4l1.3-2a43.5 43.5 0 0166.7-7.2c3 2.8 5.2 6.4 7.6 9.7 1.9 2.5 5.1 2.9 6.2.4a6 6 0 00-.4-4.9C99 10.1 85.7 2 70.2.2a50 50 0 00-38.3 11.5C27.5 15.4 24 20.4 20.4 25c-1.5 1.9-1 4 1 5.3z" />
      <path d="M42.2 29.5c-2 2.1-2.4 4.3-.7 6s3.7 1.4 5.9-.7c9.7-9.7 23.3-10 33.5-.6 2.1 2 4.3 2.2 5.9.5 1.6-1.7 1.3-3.8-1-5.9a30.5 30.5 0 00-43.6.7z" />
    </g>
  </svg>
);

BrandIcon.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

BrandIcon.defaultProps = {
  color: undefined,
  className: undefined,
};

export default BrandIcon;
