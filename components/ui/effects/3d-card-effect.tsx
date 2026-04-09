import * as React from "react";

export type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional className for the outer container */
  className?: string;
};

export function CardContainer({ className, ...props }: CardContainerProps) {
  return (
    <div
      className={className}
      style={{ perspective: "1000px" }}
      {...props}
    />
  );
}

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function CardBody({ className, style, ...props }: CardBodyProps) {
  return (
    <div
      className={className}
      style={{
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    />
  );
}

export type CardItemProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  /**
   * Common API used by many 3D card snippets.
   * We accept it but do not require any specific behavior.
   */
  translateZ?: number | string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

export function CardItem<T extends React.ElementType = "div">({
  as,
  translateZ,
  style,
  ...props
}: CardItemProps<T>) {
  const Comp = (as ?? "div") as React.ElementType;

  const tz =
    typeof translateZ === "number"
      ? `${translateZ}px`
      : typeof translateZ === "string"
        ? translateZ
        : undefined;

  return (
    <Comp
      style={{
        ...(style as React.CSSProperties),
        ...(tz ? { transform: `translateZ(${tz})` } : null),
      }}
      {...(props as any)}
    />
  );
}

export default CardContainer;
