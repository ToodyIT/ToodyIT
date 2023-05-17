import { ComponentProps, forwardRef } from "react";

type InputProps = {
  placeholder?: string | null;
  label?: string | null;
  hasError?: boolean;
  errorMessage?: string | null;
} & Omit<ComponentProps<"input">, "placeholder">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, id, label, hasError, errorMessage, ...props },
    forwardedRef
  ) => {
    return (
      <div className="w-full flex flex-col gap-3">
        <label htmlFor={id} className="text-xl font-medium">
          {label}
        </label>
        <input
          id={id}
          className="h-16 w-full bg-grey-800 border border-primary rounded-full text-white pl-4"
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
        {hasError && <span className="text-red-600">{errorMessage}</span>}
      </div>
    );
  }
);
