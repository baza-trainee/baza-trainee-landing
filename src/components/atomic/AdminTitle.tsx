export const AdminTitle = ({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) => (
  <h1
    className={`mb-[4.4rem] text-[3.2rem] font-bold text-admin-header ${className}`}
  >
    {children}
  </h1>
);
