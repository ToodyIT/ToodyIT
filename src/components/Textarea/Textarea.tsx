import { ComponentProps, forwardRef } from "react";

type TextareaProps = {
  placeholder?: string | null;
  label?: string | null;
  required?: boolean;
} & Omit<ComponentProps<"textarea">, "placeholder">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, id, label, required, ...props }, forwardedRef) => {
    return (
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor={id}
          className="text-muted text-xs uppercase tracking-wide"
        >
          {label}
          {required && <span className="ml-1 text-brand">*</span>}
        </label>
        <textarea
          className="border-line bg-glass text-fg placeholder:text-muted focus:border-brand/60 min-h-32 w-full resize-y rounded-2xl border px-4 py-3 text-sm outline-none"
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
      </div>
    );
  }
);
