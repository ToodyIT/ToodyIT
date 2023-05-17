import { ComponentProps, forwardRef } from "react";

type TextareaProps = {
  placeholder?: string | null;
  label?: string | null;
} & Omit<ComponentProps<"textarea">, "placeholder">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, id, label, ...props }, forwardedRef) => {
    return (
      <div className="w-full flex flex-col gap-3">
        <label htmlFor={id} className="text-xl font-medium">
          {label}
        </label>
        <textarea
          className="h-40 w-full bg-grey-800 border border-primary rounded-2xl text-white pl-4 resize-none"
          ref={forwardedRef}
          placeholder={placeholder ?? undefined}
          {...props}
        />
      </div>
    );
  }
);
