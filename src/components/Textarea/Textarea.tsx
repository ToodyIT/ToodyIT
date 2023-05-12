import { ComponentProps, FC, forwardRef } from "react";

type TextareaProps = {} & ComponentProps<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <textarea
        className="h-40 w-full bg-grey-800 border border-primary rounded-2xl text-white pl-4 resize-none"
        ref={forwardedRef}
        {...props}
      />
    );
  }
);
