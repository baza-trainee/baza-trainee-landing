'use client';

import { InputHTMLAttributes } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

type TProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<T> & {
    title?: string;
  };

export const ComplexityInput = <T extends FieldValues>({
  title,
  control,
  name,
  ...rest
}: TProps<T>) => {
  const { field } = useController<T>({ name, control });
  const { value } = field;

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
                {...field}
                type="radio"
                key={v}
                value={v}
                className={`h-8 w-8 cursor-pointer appearance-none rounded-full border-2 border-black ${
                  value >= v ? 'bg-black' : ''
                } `}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
