import { MultiArrow } from '@/components/common/icons';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationBar = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}: PaginationBarProps) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`mx-auto flex max-w-fit items-center gap-8 ${className}`}>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MultiArrow
          direction="left"
          bigSize
          className={currentPage === 1 ? 'text-neutral-100' : ''}
        />
      </button>

      <p className="text-4xl">
        {currentPage} з {totalPages}
      </p>

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <MultiArrow
          direction="right"
          bigSize
          className={currentPage === totalPages ? 'text-neutral-100' : ''}
        />
      </button>
    </div>
  );
};
