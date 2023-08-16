import { MultiArrow } from '@/components/common/icons';

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (arg0: number) => void;
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
    <div className={`flex gap-8 self-center mt-[5.5rem] ${className}`}>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <MultiArrow
          direction='left'
          bigSize
          className={currentPage === 1 ? 'text-neutral-100' : ''}
        />
      </button>
      <div className='flex gap-6 items-center'>
        <p className='text-center text-4xl text-neutral-900'>
          {currentPage} з {totalPages}
        </p>
      </div>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <MultiArrow
          direction='right'
          bigSize
          className={currentPage === totalPages ? 'text-neutral-100' : ''}
        />
      </button>
    </div>
  );
};
