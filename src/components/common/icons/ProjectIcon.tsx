const ProjectIcon = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2 6V18H16V6H2ZM2 4H16V2H2V4ZM17 20H1C0.44772 20 0 19.5523 0 19V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V19C18 19.5523 17.5523 20 17 20ZM4 8H8V12H4V8ZM4 14H14V16H4V14ZM10 9H14V11H10V9Z" />
    </svg>
  );
};

export default ProjectIcon;
