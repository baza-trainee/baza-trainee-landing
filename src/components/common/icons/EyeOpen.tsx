const EyeOpen = ({ fill = '#121212', width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
  >
    <path
      width={20}
      stroke={fill}
      strokeWidth={1.5}
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
    />
    <path
      stroke={fill}
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
export default EyeOpen;
