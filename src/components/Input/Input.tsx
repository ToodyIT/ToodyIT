import { ComponentProps, forwardRef } from "react";

type InputProps = {
  placeholder?: string | null;
  label?: string | null;
  hasError?: boolean;
  required?: boolean;
  errorMessage?: string | null;
} & Omit<ComponentProps<"input">, "placeholder">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, id, label, hasError, errorMessage, required, ...props },
    forwardedRef
  ) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <label htmlFor={id} className="text-xl font-medium">
          {label}
          {required && <span className="text-red-600">{" *"}</span>}
        </label>
        <input
          id={id}
          className="h-12 w-full bg-grey-800 border border-primary rounded-full text-white pl-4"
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
        {hasError && <span className="text-red-600">{errorMessage}</span>}
      </div>
    );
  }
);
