import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  placeholder?: string | null;
  label?: string | null;
  wrapperClassName?: string;
  hasError?: boolean;
  required?: boolean;
  errorMessage?: string | null;
} & Omit<ComponentProps<"input">, "placeholder">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      id,
      label,
      hasError,
      errorMessage,
      required,
      className,
      wrapperClassName,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <div className={twMerge("w-full flex flex-col gap-2", wrapperClassName)}>
        <label htmlFor={id} className="text-xl font-medium">
          {label}
          {required && <span className="text-red-600">{" *"}</span>}
        </label>
        <input
          id={id}
          className={twMerge(
            "h-12 w-full dark:bg-secondary bg-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-primary rounded-full dark:text-white text-greyDark pl-4",
            className
          )}
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
        {hasError && <span className="text-red-600">{errorMessage}</span>}
      </div>
    );
  }
);
