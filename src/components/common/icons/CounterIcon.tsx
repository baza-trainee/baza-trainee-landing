const CounterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 19 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 16H1V8H6V16ZM4 14V10H3V14H4ZM10 14V6H9V14H10ZM12 16H7V4H12V16ZM16 14V2H15V14H16ZM18 16H13V0H18V16ZM19 20H0V18H19V20Z" />
    </svg>
  );
};

export default CounterIcon;
