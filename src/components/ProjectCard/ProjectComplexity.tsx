export const ProjectComplexity = ({ count }: { count: number }) => (
  <div className="flex gap-2">
    {[1, 2, 3, 4, 5].map((value) => (
      <div
        key={value}
        className={`h-8 w-8 rounded-full border-2 border-white ${
          value <= count && 'bg-white'
        }`}
      />
    ))}
  </div>
);
