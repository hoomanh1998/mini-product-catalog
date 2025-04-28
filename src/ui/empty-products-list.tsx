import clsx from "clsx";

interface EmptyProudctListProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export default function EmptyProudctList({
  message,
  className,
  ...props
}: EmptyProudctListProps) {
  return (
    <div
      className={`w-full p-10 text-sm border rounded-2xl border-foreground/30 text-center ${clsx(
        className
      )}`}
      {...props}
    >
      {message}
    </div>
  );
}
