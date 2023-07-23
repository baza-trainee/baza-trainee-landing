import { slides } from './slides';

export const Dots = ({
  currentSlide,
  goToSlide,
}: {
  currentSlide: number;
  goToSlide: (_slideIndex: number) => void;
}) => (
  <div className="flex gap-4">
    {slides.map((_, index) => (
      <button
        onClick={() => goToSlide(index)}
        key={`key_${index + currentSlide}`}
        className={`relative h-[2rem] w-[2rem] rounded-full border border-neutral-800 hover:cursor-pointer ${
          index === currentSlide && 'bg-neutral-800'
        }`}
      ></button>
    ))}
  </div>
);
