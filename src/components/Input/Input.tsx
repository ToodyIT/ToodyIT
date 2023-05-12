import { ComponentProps, FC, forwardRef } from "react";

type InputProps = {} & ComponentProps<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <input
        className="h-16 w-full bg-grey-800 border border-primary rounded-full text-white pl-4"
        ref={forwardedRef}
        {...props}
      />
    );
  }
);
