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
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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
          color={`${currentPage === 1 ? '#B1B1B1' : ''}`}
        />
      </button>
      <div className='flex gap-6'>
        {pages.map((page) => (
          <button
            key={page}
            className={`text-center text-4xl font-bold ${
              currentPage === page ? 'text-neutral-900' : 'text-zinc-400'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <MultiArrow
          direction='right'
          bigSize
          color={`${currentPage === totalPages ? '#B1B1B1' : ''}`}
        />
      </button>
    </div>
  );
};
