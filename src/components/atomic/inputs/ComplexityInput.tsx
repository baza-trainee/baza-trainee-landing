'use client';

import {
  Dispatch,
  ForwardedRef,
  InputHTMLAttributes,
  SetStateAction,
  forwardRef,
  useState,
} from 'react';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  complexity?: number;
}

type TComplexityProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const Complexity = ({ count, setCount }: TComplexityProps) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          type="radio"
          checked={value === count}
          key={value}
          onChange={() => setCount(value)}
          className={`h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-black ${
            value <= count && 'bg-black'
          }`}
        />
      ))}
    </div>
  );
};

export const Input = (
  { title, complexity = 1, ...rest }: TextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [count, setCount] = useState(complexity);

  return (
    <div className="relative w-full max-w-[32.6rem]">
      {title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className="mb-8 mt-[2.8rem] flex h-16 w-full items-center justify-between rounded-[0.4rem] border border-neutral-300 p-[0.8rem]">
        <span>Складність:</span>{' '}
        <Complexity count={count} setCount={setCount} />
      </div>

      <input hidden ref={ref} value={count} {...rest} />
    </div>
  );
};

export const ComplexityInput = forwardRef(Input);
