/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size }) => (
  <div className="Logo">
    <svg
      width={size === "large" ? "160" : "130"}
      height={size === "large" ? "60" : "60"}
      viewBox="0 0 130 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 73.406 42.577 C 72.35 42.577 71.437 42.342 70.667 41.872 C 69.898 41.395 69.302 40.724 68.879 39.859 C 68.457 38.987 68.246 37.958 68.246 36.773 C 68.246 35.567 68.454 34.529 68.869 33.657 C 69.292 32.778 69.884 32.104 70.647 31.634 C 71.417 31.164 72.329 30.929 73.385 30.929 C 74.455 30.929 75.367 31.174 76.124 31.664 C 76.886 32.148 77.465 32.85 77.86 33.769 C 78.262 34.689 78.453 35.796 78.433 37.09 L 77.207 37.09 L 77.207 36.681 C 77.173 35.169 76.832 34.018 76.185 33.228 C 75.538 32.438 74.611 32.042 73.406 32.042 C 72.159 32.042 71.195 32.455 70.514 33.279 C 69.84 34.096 69.503 35.254 69.503 36.753 C 69.503 38.238 69.84 39.389 70.514 40.206 C 71.195 41.024 72.152 41.432 73.385 41.432 C 74.237 41.432 74.979 41.235 75.613 40.84 C 76.253 40.438 76.76 39.866 77.135 39.123 L 78.198 39.593 C 77.755 40.547 77.115 41.282 76.277 41.8 C 75.439 42.318 74.482 42.577 73.406 42.577 Z M 69.053 37.09 L 69.053 36.027 L 77.769 36.027 L 77.769 37.09 L 69.053 37.09 Z" fill="url(#paint0_linear_56_57)"/>
      <path d="M 82.46 42.27 L 78.455 31.235 L 79.67 31.235 L 83.083 40.666 L 86.485 31.235 L 87.711 31.235 L 83.706 42.27 L 82.46 42.27 Z" fill="url(#paint1_linear_56_57)"/>
      <path d="M 92.884 42.577 C 91.828 42.577 90.916 42.342 90.146 41.872 C 89.376 41.395 88.78 40.724 88.358 39.859 C 87.936 38.987 87.724 37.958 87.724 36.773 C 87.724 35.567 87.932 34.529 88.348 33.657 C 88.77 32.778 89.363 32.104 90.125 31.634 C 90.895 31.164 91.808 30.929 92.864 30.929 C 93.933 30.929 94.846 31.174 95.602 31.664 C 96.365 32.148 96.944 32.85 97.339 33.769 C 97.741 34.689 97.932 35.796 97.911 37.09 L 96.685 37.09 L 96.685 36.681 C 96.651 35.169 96.31 34.018 95.663 33.228 C 95.016 32.438 94.09 32.042 92.884 32.042 C 91.638 32.042 90.674 32.455 89.993 33.279 C 89.318 34.096 88.981 35.254 88.981 36.753 C 88.981 38.238 89.318 39.389 89.993 40.206 C 90.674 41.024 91.631 41.432 92.864 41.432 C 93.715 41.432 94.458 41.235 95.091 40.84 C 95.731 40.438 96.239 39.866 96.614 39.123 L 97.676 39.593 C 97.233 40.547 96.593 41.282 95.755 41.8 C 94.917 42.318 93.96 42.577 92.884 42.577 Z M 88.532 37.09 L 88.532 36.027 L 97.247 36.027 L 97.247 37.09 L 88.532 37.09 Z" fill="url(#paint2_linear_56_57)"/>
      <text
        fill="url(#paint5_linear_56_57)"
        style={{
          fontFamily: 'Kalimati',
          fontSize: '39px',
          fontWeight: 700,
          whiteSpace: 'pre'
        }}
        x="-1.125"
        y="44.995"
      >
        724
      </text>
      <defs>
        {/* Les définitions de gradients restent identiques */}
        <linearGradient id="paint0_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint1_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint2_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint3_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint4_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
        <linearGradient id="paint5_linear_56_57" x1="31.4312" y1="28.0978" x2="93.0547" y2="27.4592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3300FF" />
          <stop offset="1" stopColor="#3300FF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: "small",
};

export default Logo;
