import PropTypes from "prop-types";
import React from "react";

const TwitterIcon = ({ color, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 244"
    width={width}
    height={Math.ceil(width * (244 / 300))}
  >
    <path
      fill={color}
      d="M95 243A173 173 0 00269 61c11-8 22-19 30-31-11 5-23 8-35 9 13-7 22-19 27-34-12 7-25 13-39 15a61 61 0 00-104 56C97 74 52 49 22 12a61 61 0 0019 82c-10-1-20-3-28-8v1c0 30 21 54 49 60a61 61 0 01-28 1c8 24 31 42 58 42a123 123 0 01-91 26c27 17 59 27 94 27"
    />
  </svg>
);

TwitterIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
};

TwitterIcon.defaultProps = {
  color: "#1DA1F2",
  width: 100,
};

export default TwitterIcon;
