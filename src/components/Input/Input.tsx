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
      <div className={twMerge("flex w-full flex-col gap-2", wrapperClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="text-muted text-xs uppercase tracking-wide"
          >
            {label}
            {required && <span className="text-red-500">{" *"}</span>}
          </label>
        )}
        <input
          id={id}
          className={twMerge(
            "border-line bg-glass text-fg placeholder:text-muted focus:border-brand/60 h-12 w-full rounded-2xl border px-4 text-sm outline-none transition",
            className
          )}
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
        {hasError && (
          <span className="text-sm text-red-400">{errorMessage}</span>
        )}
      </div>
    );
  }
);
