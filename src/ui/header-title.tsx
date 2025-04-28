import clsx from "clsx";

interface HeaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function HeaderTitle({
  title,
  className,
  ...props
}: HeaderTitleProps) {
  return (
    <h1
      className={`text-2xl capitalize font-bold mr-auto ${clsx(className)}`}
      {...props}
    >
      {title}
    </h1>
  );
}
