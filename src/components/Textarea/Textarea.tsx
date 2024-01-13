import { ComponentProps, forwardRef } from "react";

type TextareaProps = {
  placeholder?: string | null;
  label?: string | null;
  required?: boolean;
} & Omit<ComponentProps<"textarea">, "placeholder">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, id, label, required, ...props }, forwardedRef) => {
    return (
      <div className="w-full flex flex-col gap-3">
        <label htmlFor={id} className="text-xl font-medium">
          {label}
          {required && <span className="ml-1 text-secondary">*</span>}
        </label>
        <textarea
          className="h-36 w-full dark:bg-secondary bg-greyLight border border-primary rounded-2xl dark:text-white text-greyDark p-4 resize-none"
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
      </div>
    );
  }
);
