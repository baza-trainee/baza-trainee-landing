import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = (
  { title, value, ...rest }: TextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="relative w-full max-w-[32.6rem]">
      {title && <h4 className="absolute left-0 top-0">{title}</h4>}

      <div className="mb-8 mt-[2.8rem] flex h-16 w-full items-center justify-between rounded-[0.4rem] border border-neutral-300 p-[0.8rem]">
        <span>Складність:</span>{' '}
        <div className="flex gap-2">
          {value &&
            [1, 2, 3, 4, 5].map((v) => (
              <input
                {...rest}
                type="radio"
                defaultChecked={value === v}
                key={v}
                value={v}
                className="peer h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-black bg-black peer-checked:bg-white"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export const ComplexityInput = forwardRef(Input);
