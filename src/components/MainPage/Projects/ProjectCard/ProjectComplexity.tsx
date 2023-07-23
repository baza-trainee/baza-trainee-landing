import { useId } from 'react';

export const ProjectComplexity = ({ count }: { count: number }) => {
  const key = useId();

  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={key + i}
          className={`h-8 w-8 rounded-full border-2 border-white ${
            i < count && 'bg-white'
          }`}
        />
      ))}
    </div>
  );
};
