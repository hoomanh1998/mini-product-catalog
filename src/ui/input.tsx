"use client";

import clsx from "clsx";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, id, error, className, ...props }, ref) => {
    const input_id = id || name;
    const base_class_name =
      "bg-background border border-foreground/30 text-base rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500";
    const error_class_name = "border-red-500 focus:ring-red-500";

    return (
      <div className="flex flex-col gap-y-1.5">
        {label && (
          <label htmlFor={input_id} className="text-sm font-medium capitalize">
            {label}
          </label>
        )}

        <input
          id={input_id}
          name={name}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${input_id}-error` : undefined}
          className={clsx(
            base_class_name,
            error && error_class_name,
            className
          )}
          {...props}
        />

        {error && (
          <p id={`${input_id}-error`} className="text-xs text-red-500 mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
