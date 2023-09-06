import { ForwardedRef, InputHTMLAttributes, forwardRef, useId } from 'react';

interface TextInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  errorText?: string;
}

const Checkbox = (
  { title, errorText, placeholder, ...rest }: TextInputFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const id = useId();

  return (
    <div
      className={`peer relative w-full max-w-[32.6rem] ${
        errorText ? 'text-critic-light' : ''
      }`}
    >
      {title && (
        <label htmlFor={id} className="absolute left-0 top-0">
          {title}
        </label>
      )}

      <div className="relative mb-8 mt-[2.8rem] flex h-16 w-full items-center justify-between p-[0.8rem]">
        <label htmlFor={id}>{placeholder}</label>
        <input
          {...rest}
          ref={ref}
          id={id}
          type="checkbox"
          className={`h-10 w-10 p-[0.8rem] accent-dark ${
            errorText ? 'focus:outline-critic-light' : ''
          }`}
        />
      </div>

      {errorText && (
        <span className="absolute bottom-0 left-0 text-[1.2rem]">
          {errorText}
        </span>
      )}
    </div>
  );
};

export const CheckboxInput = forwardRef(Checkbox);
