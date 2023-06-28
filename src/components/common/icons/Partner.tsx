const PartnerIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5 4V1C5 0.44772 5.44772 0 6 0H14C14.5523 0 15 0.44772 15 1V4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H1C0.44772 20 0 19.5523 0 19V5C0 4.44772 0.44772 4 1 4H5ZM2 15V18H18V15H2ZM2 13H18V6H2V13ZM7 2V4H13V2H7ZM9 10H11V12H9V10Z" />
    </svg>
  );
};

export default PartnerIcon;
