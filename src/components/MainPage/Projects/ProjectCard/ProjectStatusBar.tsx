export const ProjectStatusBar = ({
  statusName,
  statusVal,
}: {
  statusName: string;
  statusVal: 'under-development' | 'active' | 'formation';
}) => {
  const isActive = statusVal === 'active';
  const isDevelopment = statusVal === 'under-development';
  const isFormation = statusVal === 'formation';

  return (
    <div className="relative flex min-w-[15.7rem] max-w-fit items-center gap-3 rounded-md border border-neutral-100 px-6 py-3">
      <div
        className={`h-8 w-8 rounded-full 
        ${isActive && 'bg-success-dark'}
        ${isDevelopment && 'bg-yellow-500'}
        ${isFormation && 'bg-yellow-800'}
        `}
      />

      <span className="font-medium text-white">
        {/* {isActive && 'Завершено'}
        {isDevelopment && 'В розробці'}
        {isFormation && 'Формування команди'} */}
        {statusName}
      </span>
    </div>
  );
};
