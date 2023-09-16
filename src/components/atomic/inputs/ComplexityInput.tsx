'use client';

import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  complexity?: number;
}

export const Input = (
  { title, defaultValue = 1, onChange, ...rest }: TextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [count, setCount] = useState(defaultValue as number);
  // console.log("asdffdsfd", value);
  

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value);
    onChange && onChange(e);
  };

  return (
    <div className="relative w-full max-w-[32.6rem]">
      {title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className="mb-8 mt-[2.8rem] flex h-16 w-full items-center justify-between rounded-[0.4rem] border border-neutral-300 p-[0.8rem]">
        <span>Складність:</span>{' '}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              ref={ref}
              {...rest}
              type="radio"
              checked={value === count}
              key={value}
              value={value}
              onChange={handleRadioChange}
              className={`h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-black ${
                value <= count && 'bg-black'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ComplexityInput = forwardRef(Input);
