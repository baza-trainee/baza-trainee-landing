const ReportIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18 6V18.9932C18 19.5501 17.5552 20 17.0066 20H0.9934C0.44495 20 0 19.556 0 19.0082V0.9918C0 0.45531 0.4487 0 1.00221 0H11.9968L18 6ZM16 7H11V2H2V18H16V7ZM5 5H8V7H5V5ZM5 9H13V11H5V9ZM5 13H13V15H5V13Z" />
    </svg>
  );
};

export default ReportIcon;
