const SliderArrow = ({ color = 'none', width = '10', height = '24' }) => {
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
                stroke="#101010"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SliderArrow;


