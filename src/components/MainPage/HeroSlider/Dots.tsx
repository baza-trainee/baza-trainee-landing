import { slides } from './slides';

export const Dots = ({
  currentSlide,
  goToSlide,
}: {
  currentSlide: number;
  goToSlide: (_slideIndex: number) => void;
}) => (
  <div className="flex items-center gap-[0.8rem]">
    {slides.map((_, index) => (
      <button
        onClick={() => goToSlide(index)}
        aria-label={`Go to ${index + 1} slide`}
        key={`key_${index + currentSlide}`}
        className="h-[5rem] w-[5rem] sm:h-[2rem] sm:w-[2rem]"
      >
        <div
          className={`relative rounded-full border border-neutral-800 hover:cursor-pointer 
      ${
        index === currentSlide
          ? 'h-[2rem] w-[2rem] bg-neutral-800'
          : 'h-[1.6rem] w-[1.6rem]'
      }`}
        ></div>
      </button>
    ))}
  </div>
);
