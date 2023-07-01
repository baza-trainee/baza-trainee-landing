import { slides } from './slides';

export const Dots = ({ currentSlide }: { currentSlide: number }) => (
  <div className="flex gap-4">
    {slides.map((_, index) => (
      <div
        key={`key_${index + currentSlide}`}
        className={`relative h-[2rem] w-[2rem] rounded-full border border-neutral-800 ${
          index === currentSlide && 'bg-neutral-800'
        }`}
      />
    ))}
  </div>
);
