const SliderArrow = ({ color = 'none', width = '18', height = '30' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 30"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L1 15L15 29"
        stroke="#FCFCFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SliderArrow;
