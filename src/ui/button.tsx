"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "red" | "yellow" | "gray";
}

export default function Button({
  children,
  className,
  variant = "fill",
  size = "md",
  color = "blue",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg focus:outline-none focus:ring-1 disabled:opacity-50 transition-colors cursor-pointer";

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    green: "bg-green-600 text-white hover:bg-green-700",
    red: "bg-red-600 text-white hover:bg-red-700",
    yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
    gray: "bg-gray-600 text-white hover:bg-gray-700",
  };

  const outlineColorClasses: Record<string, string> = {
    blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    green: "border border-green-600 text-green-600 hover:bg-green-50",
    red: "border border-red-600 text-red-600 hover:bg-red-50",
    yellow: "border border-yellow-500 text-yellow-500 hover:bg-yellow-50",
    gray: "border border-gray-600 text-gray-600 hover:bg-gray-100",
  };

  const variants = {
    fill: colorClasses[color],
    outline: outlineColorClasses[color],
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
